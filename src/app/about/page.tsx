import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn about our values and mission at JobsRUs.",
};
export default function Page() {
  return <AboutUs />;
}
