"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { useEmployees } from "@/composables/useEmployees";
import {
  DEFAULT_COMPANY_NAME,
  DEFAULT_COMPANY_SLUG,
} from "@/utils/employees";

interface EmployeeDirectoryProps {
  companySlug?: string;
  companyName?: string;
  limit?: number;
  heading?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

interface EmployeeRecord {
  id: string;
  displayName: string;
  title: string;
  summary: string;
  department: string;
  language: string;
  photo: string;
  initials: string;
  isCpiTrained: boolean;
  role: string;
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-lavender px-4 py-3 text-primary">
      <p className="text-xs uppercase tracking-[0.3em] text-alt2">{label}</p>
      <p className="mt-1 text-base font-semibold">{value}</p>
    </div>
  );
}

function EmployeeAvatar({
  employee,
  sizeClassName,
  textClassName,
}: {
  employee: EmployeeRecord;
  sizeClassName: string;
  textClassName: string;
}) {
  if (employee.photo) {
    return (
      <img
        src={employee.photo}
        alt={employee.displayName}
        className={`${sizeClassName} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizeClassName} flex items-center justify-center rounded-full bg-primary text-lavender`}
      aria-hidden="true"
    >
      <span className={textClassName}>{employee.initials}</span>
    </div>
  );
}

function EmployeeSkeletonCard() {
  return (
    <div className="animate-pulse rounded-[32px] border border-primary/10 bg-white p-6 shadow-[0_20px_60px_rgba(44,62,80,0.08)]">
      <div className="h-24 w-24 rounded-full bg-lavender" />
      <div className="mt-5 h-5 w-2/3 rounded-full bg-lavender" />
      <div className="mt-3 h-4 w-1/2 rounded-full bg-lavender" />
      <div className="mt-5 space-y-2">
        <div className="h-4 w-full rounded-full bg-lavender" />
        <div className="h-4 w-5/6 rounded-full bg-lavender" />
        <div className="h-4 w-2/3 rounded-full bg-lavender" />
      </div>
    </div>
  );
}

export default function EmployeeDirectory({
  companySlug = DEFAULT_COMPANY_SLUG,
  companyName = DEFAULT_COMPANY_NAME,
  limit,
  heading = `${companyName} Directory`,
  intro,
  ctaHref,
  ctaLabel,
}: EmployeeDirectoryProps) {
  const { employees, isLoading, errorMessage, loadEmployees } = useEmployees(
    companySlug,
    companyName
  );
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeRecord | null>(null);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const visibleEmployees = typeof limit === "number" ? employees.slice(0, limit) : employees;

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 xxs:text-center md:text-left">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-alt2">
              Meet The Team
            </p>
            <h2 className="mt-2 text-4xl font-semibold text-primary">{heading}</h2>
            {intro ? <p className="mt-4 text-lg text-alt2">{intro}</p> : null}
          </div>
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-lavender transition duration-300 hover:scale-[1.02]"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>

        {errorMessage ? (
          <div
            className="rounded-3xl border border-[#d97706]/20 bg-[#fff7ed] px-5 py-4 text-[#9a3412]"
            role="alert"
          >
            {errorMessage}
          </div>
        ) : null}
      </div>

      {isLoading ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: limit ?? 6 }).map((_, index) => (
            <EmployeeSkeletonCard key={index} />
          ))}
        </div>
      ) : visibleEmployees.length === 0 ? (
        <div className="mt-10 rounded-[32px] border border-primary/10 bg-white px-8 py-12 text-center shadow-[0_20px_60px_rgba(44,62,80,0.08)]">
          <h3 className="text-2xl font-semibold text-primary">No team members found.</h3>
          <p className="mt-3 text-lg text-alt2">
            The {companyName} staff list will appear here once records are available.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleEmployees.map((employee: EmployeeRecord) => (
            <button
              key={employee.id}
              type="button"
              className="flex h-full flex-col rounded-[32px] border border-primary/10 bg-white p-6 text-left shadow-[0_20px_60px_rgba(44,62,80,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(44,62,80,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              onClick={() => setSelectedEmployee(employee)}
            >
              <EmployeeAvatar
                employee={employee}
                sizeClassName="h-24 w-24 border-4 border-lavender"
                textClassName="text-2xl font-bold"
              />
              <h3 className="mt-5 text-2xl font-semibold text-primary">
                {employee.displayName}
              </h3>
              {employee.title ? (
                <p className="mt-2 text-lg font-semibold text-alt2">{employee.title}</p>
              ) : null}
              <p className="mt-4 line-clamp-4 text-base leading-7 text-alt2">
                {employee.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {employee.language ? (
                  <span className="rounded-full bg-lavender px-3 py-1 text-sm font-semibold text-primary">
                    {employee.language}
                  </span>
                ) : null}
                {employee.isCpiTrained ? (
                  <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-lavender">
                    CPI trained
                  </span>
                ) : null}
              </div>
            </button>
          ))}
        </div>
      )}

      <Transition appear as={Fragment} show={Boolean(selectedEmployee)}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelectedEmployee(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary/40" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl rounded-[36px] bg-white p-6 md:p-10 shadow-[0_24px_90px_rgba(44,62,80,0.22)]">
                  {selectedEmployee ? (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-5">
                          <EmployeeAvatar
                            employee={selectedEmployee}
                            sizeClassName="h-24 w-24 border-4 border-lavender"
                            textClassName="text-2xl font-bold"
                          />
                          <div>
                            <Dialog.Title className="text-3xl font-semibold text-primary">
                              {selectedEmployee.displayName}
                            </Dialog.Title>
                            {selectedEmployee.title ? (
                              <p className="mt-2 text-lg font-semibold text-alt2">
                                {selectedEmployee.title}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="rounded-full border border-primary/10 px-4 py-2 font-semibold text-primary transition duration-200 hover:bg-lavender"
                          onClick={() => setSelectedEmployee(null)}
                        >
                          Close
                        </button>
                      </div>

                      <div className="mt-8 rounded-[28px] bg-lavender/60 px-6 py-5">
                        <p className="text-base leading-8 text-alt2">
                          {selectedEmployee.summary}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <DetailRow label="Department" value={selectedEmployee.department} />
                        <DetailRow label="Language" value={selectedEmployee.language} />
                        {selectedEmployee.role &&
                        selectedEmployee.role !== selectedEmployee.title ? (
                          <DetailRow label="Role" value={selectedEmployee.role} />
                        ) : null}
                        {selectedEmployee.isCpiTrained ? (
                          <DetailRow label="Training" value="CPI trained" />
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
