"use client"

import { ProductsList } from "@/components/ProductList";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="background-color: red;">
      <div>
        <h1>dashboard</h1>
        <ProductsList />
      </div>
    </main>
  );
};

export default Home;
