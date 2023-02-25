import styles from "./FeaturedList.module.scss";
import { recipesData } from "../../assets/hardCodedRecipes"; //hardCoded For styling
import FeaturedItem from "./FeaturedItem/FeaturedItem";

const FeaturedList = () => {
  return (
    <div className={styles.featuredListContainer}>
      <h2 className={styles.featuredListHeading}>Featured</h2>
      {recipesData.map((recipe) => (
        <FeaturedItem
          key={recipe.id}
          itemImageSrc={recipe.imageSrc}
          itemTitle={recipe.title}
        />
      ))}
    </div>
  );
};

export default FeaturedList;
