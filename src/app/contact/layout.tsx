import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Nyakazi Organics for inquiries about our indigenous vegetables, farming practices, or partnership opportunities. We'd love to hear from you!",
  openGraph: {
    title: "Contact Nyakazi Organics",
    description:
      "Get in touch with Nyakazi Organics. We're here to answer your questions about our indigenous vegetables and sustainable farming.",
  },
};

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
