"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { questions as javascriptQuestions } from "@/data/javascrip-questions/index";
import { questions as htmlQuestions } from "@/data/htmlQuestions";
import { questions as cssQuestions } from "@/data/cssQuestions";
import { questions as reactQuestions } from "@/data/react-questions/index";
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
  const [activeLevel, setActiveLevel] = useState("");
  const tabsRef = useRef([]);

  // Levels for each section (keys from questions object)
  const levels = useMemo(
    () => Object.keys(tabs[activeIndex].questions),
    [activeIndex]
  );

  // Active tab
  const activeTab = tabs[activeIndex];
  const { name, questions } = activeTab;

  // Update document title
  useEffect(() => {
    document.title = `${name} Interview Questions`;
  }, [name]);

  // Reset level when tab changes
  useEffect(() => {
    setActiveLevel(levels[0] || "");
  }, [activeIndex, levels]);

  // Focus active tab on change
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
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              <span className="flex items-center gap-2">
                {tab.icon}
                {tab.name}
              </span>
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
                {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {levels.map((level) => (
                <DropdownMenuItem
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  aria-checked={activeLevel === level}
                  className={activeLevel === level ? "bg-muted" : ""}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Questions Component */}
        {activeLevel && (
          <QuestionsPage
            questions={questions[activeLevel]}
            name={`${name} - ${
              activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)
            }`}
          />
        )}
      </div>
    </div>
  );
}
