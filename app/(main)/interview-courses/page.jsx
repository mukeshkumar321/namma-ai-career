"use client";

import { useState } from "react";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronDown, FileCode, Palette, Code2, Atom } from "lucide-react";

const tabs = [
  {
    name: "HTML",
    icon: <FileCode className="h-4 w-4" />,
    questions: htmlQuestions,
  },
  {
    name: "CSS",
    icon: <Palette className="h-4 w-4" />,
    questions: cssQuestions,
  },
  {
    name: "Javascript",
    icon: <Code2 className="h-4 w-4" />,
    questions: javascriptQuestions,
  },
  {
    name: "React",
    icon: <Atom className="h-4 w-4" />,
    questions: reactQuestions,
  },
];

export default function InterviewCoursesPage() {
  const [activeLevels, setActiveLevels] = useState(() =>
    tabs.reduce((acc, tab) => {
      const levels = Object.keys(tab.questions);
      acc[tab.name] = levels[0] || "";
      return acc;
    }, {})
  );

  return (
    <div className="relative mx-auto px-4 py-2">
      <div className="grid-background absolute inset-0 -z-10" />
      <Tabs defaultValue={tabs[0].name}>
        {/* Tab Header */}
        <TabsList className="mb-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.name} value={tab.name}>
              <span className="flex items-center gap-2">
                {tab.icon}
                {tab.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        {tabs.map((tab) => {
          const levels = Object.keys(tab.questions);
          const activeLevel = activeLevels[tab.name];

          return (
            <TabsContent key={tab.name} value={tab.name} className="space-y-6">
              {/* Subsection Selector */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-48 justify-between">
                      {activeLevel.charAt(0).toUpperCase() +
                        activeLevel.slice(1)}
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {levels.map((level) => (
                      <DropdownMenuItem
                        key={level}
                        onClick={() =>
                          setActiveLevels((prev) => ({
                            ...prev,
                            [tab.name]: level,
                          }))
                        }
                        className={activeLevel === level ? "bg-muted" : ""}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Questions */}
              {activeLevel && (
                <QuestionsPage
                  questions={tab.questions[activeLevel]}
                  name={`${tab.name} - ${
                    activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)
                  }`}
                />
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
