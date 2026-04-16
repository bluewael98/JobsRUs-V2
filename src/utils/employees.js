export const DEFAULT_COMPANY_SLUG = "jobsrus";
export const DEFAULT_COMPANY_NAME = "JobsRUs";

const TRUE_LIKE_CPI_VALUES = new Set(["true", "yes", "y", "1"]);

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function toTimestamp(value) {
  if (!isNonEmptyString(value)) {
    return 0;
  }

  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toSortOrder(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

function getInitials(name) {
  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (parts.length === 0) {
    return "JR";
  }

  return parts.map((part) => part[0]?.toUpperCase() || "").join("");
}

export function getEmployeeSummary(companyName = DEFAULT_COMPANY_NAME) {
  return `Part of the ${companyName} team, providing thoughtful support tailored to participant needs.`;
}

export function isCpiTrained(value) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value === 1;
  }

  if (typeof value !== "string") {
    return false;
  }

  return TRUE_LIKE_CPI_VALUES.has(value.trim().toLowerCase());
}

export function normalizeEmployee(employee, companyName = DEFAULT_COMPANY_NAME) {
  const displayName =
    employee?.name ||
    employee?.full_name ||
    `[${companyName}] team member`;
  const title = employee?.title || employee?.role || "";
  const summary =
    employee?.bio ||
    employee?.description ||
    getEmployeeSummary(companyName);

  return {
    id: String(
      employee?.id ??
        employee?.key ??
        `${displayName}-${employee?.created_at ?? employee?.sort_order ?? "member"}`
    ),
    displayName,
    title,
    summary,
    department: isNonEmptyString(employee?.department) ? employee.department : "",
    language:
      employee?.language ||
      employee?.Language ||
      "",
    photo: isNonEmptyString(employee?.photo) ? employee.photo : "",
    initials: getInitials(displayName),
    isCpiTrained: isCpiTrained(employee?.cpi_trained ?? employee?.cpiTrained),
    role: employee?.role || "",
    sortOrder: toSortOrder(employee?.sort_order),
    createdAt: employee?.created_at || "",
    createdAtTimestamp: toTimestamp(employee?.created_at),
  };
}

export function sortEmployees(employees) {
  return [...employees].sort((left, right) => {
    if (left.sortOrder !== right.sortOrder) {
      return left.sortOrder - right.sortOrder;
    }

    return right.createdAtTimestamp - left.createdAtTimestamp;
  });
}
