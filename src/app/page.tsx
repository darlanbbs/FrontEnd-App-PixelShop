import CatalogPage from "@/components/CatalogProducts/CatalogPage";
import CatalogProductsArea from "@/components/CatalogProductsArea/CatalogProductsArea";

export default function Home() {
  return (
    <main>
      <CatalogProductsArea>
        <CatalogPage />
      </CatalogProductsArea>
    </main>
  );
}
