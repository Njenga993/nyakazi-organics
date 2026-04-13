import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Nyakazi Organics' mission to revive indigenous African vegetables through sustainable farming. Meet the farmers and discover our journey from 2023 to today.",
  openGraph: {
    title: "About Nyakazi Organics - Our Story & Mission",
    description:
      "Discover how Nyakazi Organics is preserving Kenya's agricultural heritage through sustainable indigenous vegetable farming.",
    images: ["/images/mercyy.jpg"],
  },
  twitter: {
    title: "About Nyakazi Organics - Our Story & Mission",
    description:
      "Discover how Nyakazi Organics is preserving Kenya's agricultural heritage through sustainable indigenous vegetable farming.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
