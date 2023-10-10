import CatalogPage from "@/components/CatalogProducts/CatalogPage";
import CatalogProductsArea from "@/components/CatalogProductsArea/CatalogProductsArea";
import { MyContextProvider } from "@/components/context/ProductIdContext";

export default function Home() {
  return (
    <main>
      <MyContextProvider>
        <CatalogProductsArea>
          <CatalogPage />
        </CatalogProductsArea>
      </MyContextProvider>
    </main>
  );
}
