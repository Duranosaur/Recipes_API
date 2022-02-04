import { Ingredient, IngredientCategory } from "./ingredient";

export class IngredientService {
    public get(name: string): Ingredient {
        return {
            id: Math.floor(Math.random() * 10000),
            name: name,
            nutritionFacts: {  
                calories: 0,
                fat: 0,
                saturatedFat: 0
            },
            quantity: 0,
            unit: "",
            price: 0,
            description: "",
            image: "",
            category: IngredientCategory.other,
        };
    }

    public getByCategory(category: IngredientCategory): Ingredient[] {
        return [
            {
                id: Math.floor(Math.random() * 10000),
                name: "",
                nutritionFacts: {  
                    calories: 0,
                    fat: 0,
                    saturatedFat: 0
                },
                quantity: 0,
                unit: "",
                price: 0,
                description: "",
                image: "",
                category: IngredientCategory.other,
            },
            {
                id: Math.floor(Math.random() * 10000),
                name: "",
                nutritionFacts: {  
                    calories: 0,
                    fat: 0,
                    saturatedFat: 0
                },
                quantity: 0,
                unit: "",
                price: 0,
                description: "",
                image: "",
                category: IngredientCategory.other,
            },
            {
                id: Math.floor(Math.random() * 10000),
                name: "",
                nutritionFacts: {  
                    calories: 0,
                    fat: 0,
                    saturatedFat: 0
                },
                quantity: 0,
                unit: "",
                price: 0,
                description: "",
                image: "",
                category: IngredientCategory.other,
            },
        ];
    }
}