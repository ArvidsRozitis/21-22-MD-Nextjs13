// import { recipesData } from "../../assets/hardCodedRecipes"; hard coded
import styles from "./RecipeList.module.scss";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesType from "@/utils/interfaces/recipes";

const fetchFeaturedRecipes = async () => {
  const res = await fetch("http://localhost:3000/api/recipes");
  const featuredRecipes: RecipesType[] = await res.json();
  console.log(featuredRecipes)
  return featuredRecipes;
};

const  RecipeList = async () => {
  const recipesData = await fetchFeaturedRecipes();
  return (
    <div className={styles.recipesContainer}>
      {recipesData.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          title={recipe.title}
          step={recipe.steps}
          imageSrc={recipe.imageSrc}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
