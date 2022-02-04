import { Ingredient } from "../ingredients/ingredient";

export interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: Ingredient[];
    instructions: string[];
    nutritionFacts: {[key: string]: number };
    steps: {[key: number]: string };
}
