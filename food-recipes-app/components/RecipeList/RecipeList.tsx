import { recipesData } from "../../assets/hardCodedRecipes";
import styles from "./RecipeList.module.scss";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = () => {
  return (
    <div className={styles.recipesContainer}>
      {recipesData.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          step1={recipe.steps[0]}
          imageSrc={recipe.imageSrc}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
