export enum IngredientCategory {
    dairy,
    fatsAndOils,
    fruits,
    vegetables,
    spices,
    grains,
    meats,
    other
}

export interface Ingredient {
    id: number;
    name: string;
    category: IngredientCategory;
    quantity: number;
    unit: string;
    price: number;
    description: string;
    image: string;
    nutritionFacts: {[key: string]: number };
}


