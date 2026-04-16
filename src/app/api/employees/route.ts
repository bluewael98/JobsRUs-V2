import { NextResponse } from "next/server";
import { getEmployees } from "../../../../server/employees";

const DEFAULT_COMPANY = "jobsrus";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const company = searchParams.get("company")?.trim().toLowerCase() || DEFAULT_COMPANY;

  try {
    const employees = await getEmployees(company);

    return NextResponse.json(
      { employees },
      {
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("Unable to load employees:", error);

    return NextResponse.json(
      {
        employees: [],
        error: "Unable to load employees at the moment.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }
}
