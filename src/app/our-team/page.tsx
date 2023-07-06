import OurTeam from "@/scenes/OurTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our team",
  description: "Our team of HEROES.",
};

export default function Page() {
  return <OurTeam />;
}
