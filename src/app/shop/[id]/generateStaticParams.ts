// src/app/shop/[id]/generateStaticParams.ts
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
