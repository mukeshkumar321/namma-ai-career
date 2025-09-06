import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AssessmentType } from "./assessment.types";
import { BrainIcon, CircleDotIcon, TrophyIcon } from "lucide-react";

const StatisticCard = ({ assessments }: { assessments: AssessmentType[] }) => {
  const averageScore = assessments.length
    ? assessments.reduce((acc, curr) => acc + curr.quizScore, 0) /
      assessments.length
    : 0;

  const questionsPracticed = assessments.reduce(
    (acc, curr) => acc + curr.questions.length,
    0
  );

  const latestScore = assessments[0]?.quizScore ?? 0;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Average Score */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Average Score</CardTitle>
          <TrophyIcon
            className="h-4 w-4 text-muted-foreground"
            aria-label="Average score indicator"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            {averageScore.toFixed(1)}%
          </p>
          <CardDescription>Across all assessments</CardDescription>
        </CardContent>
      </Card>

      {/* Questions Practiced */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Questions Practiced</CardTitle>
          <BrainIcon
            className="h-4 w-4 text-muted-foreground"
            aria-label="Questions practiced indicator"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            {questionsPracticed}
          </p>
          <CardDescription>Total questions practiced</CardDescription>
        </CardContent>
      </Card>

      {/* Latest Score */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Latest Score</CardTitle>
          <CircleDotIcon
            className="h-4 w-4 text-muted-foreground"
            aria-label="Latest score indicator"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            {latestScore}%
          </p>
          <CardDescription>Most recent quiz attempt</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default StatisticCard;
