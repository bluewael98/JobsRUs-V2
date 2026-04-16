import OurTeam from "@/scenes/OurTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JobsRUs Team",
  description: "Meet the JobsRUs team.",
};

export default function Page() {
  return <OurTeam companySlug="jobsrus" companyName="JobsRUs" />;
}
