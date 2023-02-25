import styles from "./recipes.module.scss";
import FeaturedList from "@/components/FeaturedList/FeaturedList";
export default function RecepesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
