"use client";

import { useCallback, useState } from "react";
import {
  DEFAULT_COMPANY_NAME,
  DEFAULT_COMPANY_SLUG,
  normalizeEmployee,
  sortEmployees,
} from "@/utils/employees";

export function useEmployees(
  companySlug = DEFAULT_COMPANY_SLUG,
  companyName = DEFAULT_COMPANY_NAME
) {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadEmployees = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `/api/employees?company=${encodeURIComponent(companySlug)}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to load employees at the moment.");
      }

      const normalizedEmployees = Array.isArray(payload?.employees)
        ? payload.employees.map((employee) => normalizeEmployee(employee, companyName))
        : [];

      setEmployees(sortEmployees(normalizedEmployees));
    } catch (error) {
      setEmployees([]);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to load employees at the moment."
      );
    } finally {
      setIsLoading(false);
    }
  }, [companyName, companySlug]);

  return {
    employees,
    isLoading,
    errorMessage,
    loadEmployees,
  };
}
