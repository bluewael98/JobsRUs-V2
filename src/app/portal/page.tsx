import PortalPage from "@/scenes/PortalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disability Job Portal",
  description:
    "Discover your dream job and take the next step in your career with our comprehensive job portal.",
};

export default function Page() {
  return <PortalPage />;
}
