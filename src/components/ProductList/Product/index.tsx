import { iProducts } from "@/contexts/user/interface";
import Image from "next/image";



interface ProductProps {
  product: iProducts;
}

export const Product = ({ product }: ProductProps) => {
  console.log("Produto:", product);
  return (
    <li>
      <figure>
      <Image
          src={product.img}
          alt={product.productName}
          width={200}
          height={200}
        />
      </figure>

      <div>
        <h3>{product.productName}</h3>

        <h4>
          {product.category}
        </h4>

        <h4 >
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </h4>

        {/* <button height="medium" handleClick={() => addToCart(product)}>
          Adicionar
        </button> */}
      </div>
    </li>
  );
};
