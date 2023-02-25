import styles from "./recipes.module.scss";
export default function RecepesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.pageContainer}>
        <h1>side bar</h1>
        <div className={styles.recipesContainer}>
          <span>search komponents</span>
          {children}
        </div>
      </div>
    </>
  );
}
