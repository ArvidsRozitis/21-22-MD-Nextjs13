import { Schema, model, models } from "mongoose";

const featuredRecepieSchema = new Schema({
  title: String,
  imageSrc: String,
});

const FeaturedRecipe =
  models.FeaturedRecipe || model("recipes", featuredRecepieSchema);

export default FeaturedRecipe;
