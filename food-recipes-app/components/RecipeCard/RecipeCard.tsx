import styles from "./RecipeCard.module.scss";
import Image from "next/image";
import IngredientsList from "../IngredientsList/IngredientsList";

type RecipeProps = {
  title: string;
  imageSrc: string;
  step1: string;
  ingredients: string[];
};

const RecipeCard = ({ title, step1, imageSrc, ingredients }: RecipeProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div className={styles.cardImage}>
          <Image
            src={imageSrc}
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className={styles.cardInfo}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.paragraphContainer}>
          <p className={styles.cardParagraph}>{step1}</p>
          <span className={styles.readMore}>read more...</span>
        </div>

        <IngredientsList ingredients={ingredients} />
      </div>
    </div>
  );
};

export default RecipeCard;
