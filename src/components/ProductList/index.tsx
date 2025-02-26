"use client";

import {
  useContext,
  // useEffect
} from "react";
import { Product } from "./Product";
// import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/user/userContext";

export const ProductsList: React.FC = () => {
  const { filteredWord, products, filteredProducts } = useContext(UserContext);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!products || products.length === 0) {
  //     router.push("/404");
  //   }
  // }, [products, router]);

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <ul>
      {filteredWord && (
        <div>
          Resultados para:{" "}
          <h2>{filteredWord}</h2>
        </div>
      )}
      <ul>
        {filteredProducts
          ? filteredProducts
              .filter((produc) => produc.productName)
              .map((produc) => <Product key={produc.id} product={produc} />)
          : products
              .filter((e) => e.productName)
              .map((e) => <Product key={e.id} product={e} />)}
      </ul>
    </ul>
  );
};
