import {
    Controller,
    Get,
    Path,
    Query,
    Route,
    SuccessResponse,
} from 'tsoa';
import { Ingredient, IngredientCategory } from './ingredient';
import { IngredientService } from './ingredientService';

@Route("ingredients")
export class IngredientController extends Controller {
    @Get("{ingredientId}")
    public async getIngredient(
        @Query() name: string,
    ): Promise<Ingredient> {
        return new IngredientService().get(name);
    }

    @SuccessResponse("201", "Created")
    @Get("category/{category}")
    public async getByCategory(
        @Path() category: IngredientCategory,
    ): Promise<Ingredient[]> {
        return new IngredientService().getByCategory(category);
    }
}
