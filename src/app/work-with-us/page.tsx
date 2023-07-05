import WorkWithUs from "@/components/WorkWithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work with us",
  description: "Come work with us, we would love to have you part of our team.",
};

export default function Page() {
  return <WorkWithUs />;
}
