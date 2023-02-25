import styles from "./FeaturedItem.module.scss";
import Image from "next/image";

type ItemProps = {
  itemImageSrc: string;
  itemTitle: string;
};

const FeaturedItem = ({ itemImageSrc, itemTitle }: ItemProps) => {
  return (
    <div className={styles.featuredItemContainer}>
      <h3 className={styles.featuredItemHeading}>{itemTitle}</h3>
      <div className={styles.featuredImage}>
        <Image
          src={itemImageSrc}
          alt={itemTitle}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default FeaturedItem;
