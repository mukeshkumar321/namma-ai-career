import { industryInsights } from "@/data/industry-insights";
import { format } from "date-fns";
import StatisticCard from "./_components/statistic-card";
import RecommendedSkill from "./_components/recommended-skill";
import KeyIndustryTrends from "./_components/key-industry-trends";
import SalaryRangeChart from "./_components/salary-range-chart";

export default function Dashboard() {
  const lastUpdatedDate = industryInsights.lastUpdated
    ? format(new Date(industryInsights.lastUpdated), "MMMM dd, yyyy")
    : "Not available";

  return (
    <div className="relative">
      <div className="grid-background" aria-hidden="true" />
      <div className="container mx-auto p-4 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Industry Insights
        </h1>
        <p>
          Last updated:
          <time dateTime={industryInsights.lastUpdated}>{lastUpdatedDate}</time>
        </p>
        <StatisticCard industryInsights={industryInsights} />
        <SalaryRangeChart salaryRanges={industryInsights.salaryRanges} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KeyIndustryTrends keyTrends={industryInsights.keyTrends} />
          <RecommendedSkill topSkills={industryInsights.topSkills} />
        </div>
      </div>
    </div>
  );
}
