"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { questions as javascriptQuestions } from "@/data/javascriptQuestion";
import { questions as htmlQuestions } from "@/data/htmlQuestions";
import { questions as cssQuestions } from "@/data/cssQuestions";
import { questions as reactQuestions } from "@/data/react";
import QuestionsPage from "./_components/questions-page";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, FileCode, Palette, Code2, Atom } from "lucide-react";

// Tab data
const tabs = [
  { name: "HTML", icon: <FileCode />, questions: htmlQuestions },
  { name: "CSS", icon: <Palette />, questions: cssQuestions },
  { name: "Javascript", icon: <Code2 />, questions: javascriptQuestions },
  { name: "React", icon: <Atom />, questions: reactQuestions },
];

export default function InterviewCoursesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLevel, setActiveLevel] = useState("Beginner");
  const tabsRef = useRef([]);

  // Levels for each section
  const levels = useMemo(() => {
    // Get keys from the active tab's questions object
    return Object.keys(tabs[activeIndex].questions).map(
      (level) => level.charAt(0).toUpperCase() + level.slice(1)
    );
  }, [activeIndex]);

  // Memoize active tab for performance
  const activeTab = useMemo(() => tabs[activeIndex], [activeIndex]);
  const { name, questions } = activeTab;

  // Update document title when active tab changes
  useEffect(() => {
    document.title = `${name} Interview Questions`;
  }, [name]);

  // Reset level to beginner when switching tab
  useEffect(() => {
    setActiveLevel("Beginner");
  }, [activeIndex]);

  // Focus active tab whenever activeIndex changes
  useEffect(() => {
    tabsRef.current[activeIndex]?.focus();
  }, [activeIndex]);

  // Keyboard navigation for tabs
  const handleKeyDown = (e, idx) => {
    let newIndex = idx;
    switch (e.key) {
      case "ArrowRight":
        newIndex = (idx + 1) % tabs.length;
        break;
      case "ArrowLeft":
        newIndex = (idx - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    if (newIndex !== idx) setActiveIndex(newIndex);
  };

  const activeClass = "bg-primary text-primary-foreground shadow-md";
  const inactiveClass = "bg-card text-foreground hover:bg-muted";

  return (
    <div className="relative mx-auto px-4 py-8">
      <div className="grid-background absolute inset-0 -z-10" />

      {/* Tabs */}
      <nav
        role="tablist"
        aria-label="Interview Topics"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-lg p-2 mb-6 bg-secondary"
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;
          return (
            <Button
              key={tab.name}
              ref={(el) => (tabsRef.current[idx] = el)}
              id={`tab-${idx}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${idx}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`flex-1 text-center px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {tab.icon}
              {tab.name}
            </Button>
          );
        })}
      </nav>

      {/* Active Tab Content */}
      <div
        id={`tabpanel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
        className="space-y-6"
      >
        {/* Subsection Selector */}
        <div className="mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="destructive" className="w-48 justify-between">
                {activeLevel}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {levels.map((level) => (
                <DropdownMenuItem
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={activeLevel === level ? "bg-muted" : ""}
                >
                  {level}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Questions Component */}
        <QuestionsPage
          questions={questions[activeLevel.toLowerCase()]}
          name={`${name} - ${activeLevel}`}
        />
      </div>
    </div>
  );
}
