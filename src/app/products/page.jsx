import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  // if(session && session.user.error){
  //     return "Unauthorized"
  // }

  // const session = await auth();

  if (!session?.user?.payload?.token) {
    redirect("/login");
  }

  const products = await getAllProductService();

  const fallbackProducts = [
    {
      id: "1",
      name: "Lenovo Thinkpad",
      price: 1700,
      imageUrl:
        "https://p3-ofp.static.pub//fes/cms/2024/04/29/ikn2t6lun9udtvltruq2e6lp6yb30g570931.png",
    },
    {
      id: "2",
      name: "Samsung Galaxy",
      price: 1000,
      imageUrl: "https://m.media-amazon.com/images/I/61M4ndNetDL.jpg",
    },
    {
      id: "3",
      name: "IPhone",
      price: 1200,
      imageUrl:
        "https://www.mobileana.com/wp-content/uploads/2025/06/Apple-iPhone-17-Pro-Max-Cosmic-Orange.webp",
    },
  ];

  const safeProducts =
    Array.isArray(products) && products.length > 0
      ? products
      : fallbackProducts;

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {safeProducts.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
