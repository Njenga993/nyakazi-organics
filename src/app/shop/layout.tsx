import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shop - Indigenous African Vegetables",
  description:
    "Shop our selection of organic indigenous African vegetables. Sustainably grown, nutrient-dense traditional foods delivered to your doorstep.",
  openGraph: {
    title: "Shop Nyakazi Organics - Indigenous African Vegetables",
    description:
      "Browse our selection of organic indigenous African vegetables. Sustainably grown and delivered fresh to your door.",
  },
};

interface ShopLayoutProps {
  children: ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return <>{children}</>;
}
