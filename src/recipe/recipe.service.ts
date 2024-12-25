import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecipeService {
  private readonly s3Prefix: string;

  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
    private readonly configService: ConfigService,
  ) {
    this.s3Prefix = this.configService.get<string>('S3_PREFIX');
  }

  async findAll(): Promise<Recipe[]> {
    const recipes = await this.recipeRepository.find();
    return recipes.map((recipe) => this.addS3Prefix(recipe));
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return this.addS3Prefix(recipe);
  }

  async searchByName(
    name: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<{ data: Recipe[]; total: number; page: number; limit: number }> {
    const [recipes, total] = await this.recipeRepository
      .createQueryBuilder('recipes')
      .where('recipes.name LIKE :name', { name: `%${name}%` })
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    const mappedRecipes = recipes.map((recipe) => this.addS3Prefix(recipe));
    return { data: mappedRecipes, total, page, limit };
  }

  private addS3Prefix(recipe: Recipe): Recipe {
    return {
      ...recipe,
      image: recipe.image ? `${this.s3Prefix}/${recipe.image}` : null, // Changed imageUrl to image
    };
  }
}
