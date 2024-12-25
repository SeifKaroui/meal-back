import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './entities/recipe.entity';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('search')
  async searchByName(
    @Query('name') name: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.recipeService.searchByName(name, page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  @Get()
  findAll(): Promise<Recipe[]> {
    console.log('ée');
    return this.recipeService.findAll();
  }
}
