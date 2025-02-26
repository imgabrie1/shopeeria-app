// Ajuste o arquivo src/pages/dashboard.tsx

import { ProductsList } from "@/components/ProductList";
import { NextPage } from "next";

const Dashboard: NextPage = async () => {
  return (
    <main>
      <div>
        <h1>dashboard</h1>
        <ProductsList />
      </div>
    </main>
  );
};

export default Dashboard;
