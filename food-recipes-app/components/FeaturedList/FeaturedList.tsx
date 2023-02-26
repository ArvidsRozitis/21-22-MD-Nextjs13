import styles from "./FeaturedList.module.scss";
import FeaturedItem from "./FeaturedItem/FeaturedItem";

type FeaturedRecipes = {
  _id: string;
  title: string;
  imageSrc: string;
};

const fetchFeaturedRecipes = async () => {
  const res = await fetch("http://localhost:3000/api/featuredRecipes");
  const featuredRecipes: FeaturedRecipes[] = await res.json();
  return featuredRecipes
};

const FeaturedList = async () => {
  const featuredRecipes = await fetchFeaturedRecipes() 
  return (
    <div className={styles.featuredListContainer}>
      <h2 className={styles.featuredListHeading}>Featured</h2>
      {featuredRecipes.map((recipe) => (
        <FeaturedItem
          key={recipe._id}
          itemImageSrc={recipe.imageSrc}
          itemTitle={recipe.title}
        />
      ))}
    </div>
  );
};

export default FeaturedList;
