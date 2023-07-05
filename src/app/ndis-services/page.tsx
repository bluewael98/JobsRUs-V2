import NDISServices from "@/components/NDISServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Services",
  description:
    "View our transparent services and choose the right service to help you access your desired employment goals.",
};

export default function page() {
  return (
    <section>
      <NDISServices />;
    </section>
  );
}
