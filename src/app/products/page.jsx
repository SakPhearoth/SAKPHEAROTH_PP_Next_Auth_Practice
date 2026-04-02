import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

export default async function page() {
  // const session = await auth();
  // if(session && session.user.error){
  //     return "Unauthorized"
  // }

  const products = await getAllProductService();

  return (
    <div className="m-auto">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product}/>
      ))}
    </div>
  );
}
