import styles from "./recipes.module.scss";
import FeaturedList from "@/components/FeaturedList/FeaturedList";
export default function RecepesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.pageContainer}>
        <FeaturedList />
        <div className={styles.recipesContainer}>
          {children}
        </div>
      </div>
    </>
  );
}
