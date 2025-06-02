import styles from "./page.module.css";
import ShippingGrid from "./components/ShippingGrid";
import { mockShippingItems } from "./data/mockData";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ShippingGrid items={mockShippingItems} />
      </main>
    </div>
  );
}
