// src/app/shop/[id]/page.tsx
import { products } from "@/data/products";
import ProductDetail from "./ProductDetail";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetail />;
}
