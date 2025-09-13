"use client";

import { useState } from "react";

import JavaScriptPage from "./_components/javascript/page";
import ReactPage from "./_components/react/page";
import MachineCodingPage from "./_components/machine-coding/page";
import PerformanceOptimisationPage from "./_components/performance-optimisation/page";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    name: "Javascript",
    Page: JavaScriptPage,
    data: { name: "JavaScript Assessments" },
  },
  {
    name: "React",
    Page: ReactPage,
    data: { name: "React Assessments" },
  },
  {
    name: "Machine Coding",
    Page: MachineCodingPage,
    data: { name: "Machine Coding Assessments" },
  },
  {
    name: "Performance Optimisation",
    Page: PerformanceOptimisationPage,
    data: { name: "Performance Optimisation Assessments" },
  },
];

export default function InterviewCoursesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { Page, data } = tabs[activeIndex];

  return (
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="grid-background" />
      {/* Tabs */}
      <nav
        role="tablist"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-lg p-2 mb-6 bg-secondary"
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;

          return (
            <Button
              key={tab.name}
              onClick={() => setActiveIndex(idx)}
              role="tab"
              aria-selected={isActive}
              className={`flex-1 text-center px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
            >
              {tab.name}
            </Button>
          );
        })}
      </nav>

      {/* Active Page */}
      <div className="space-y-6">
        <Page data={data} />
      </div>
    </div>
  );
}
