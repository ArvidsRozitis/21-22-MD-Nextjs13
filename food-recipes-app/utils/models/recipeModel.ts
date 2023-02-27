import { Schema, model, models } from "mongoose";

const recipeSchema = new Schema({
  title: String,
  imageSrc: String,
  category: String,
  ingredients: [String],
  steps: [String],
});

const Recipe = models.Recipe || model("recipes", recipeSchema);

export default Recipe;
