import styles from "./IngredientsList.module.scss";
import uuid4 from "uuid4";

type Ingredients = {
  ingredients: string[];
};

const IngredientsList = ({ ingredients }: Ingredients) => {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.listHeading}>Ingredients</h3>
      <div className={styles.listItem}>
        <span>{`${ingredients[0]} |`} </span>
        <span>{`${ingredients[1]} |`} </span>
      </div>
      <span className={styles.listSpanMore}>..and more</span>
    </div>
  );
};

export default IngredientsList;
