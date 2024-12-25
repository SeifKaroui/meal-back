import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @Column({ type: 'text' })
  instructions: string;

  @Column()
  image: string | null;

  @Column({ nullable: true })
  tags: string | null;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
    cascade: true,
    eager: true,
  })
  ingredients: Ingredient[];
}
