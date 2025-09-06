import { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";
import StatisticCard from "./_components/statistic-card";
import PerformanceTrend from "./_components/performance-trend";
import RecentQuizzes from "./_components/recent-quizzes";
import { assessments } from "@/data/assessments";

export default function Interview() {
  return (
    <div className="relative">
      <div className="grid-background" aria-hidden="true" />
      <div className="container mx-auto p-4 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Interview Preparation
        </h1>
        <Suspense
          fallback={
            <BarLoader className="mt-4" width={"100%"} color="#4A5568" />
          }
        >
          <StatisticCard assessments={assessments} />
          <PerformanceTrend assessments={assessments}/>
          <RecentQuizzes assessments={assessments}/>
        </Suspense>
      </div>
    </div>
  );
}
