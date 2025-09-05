import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BrainIcon,
  BriefcaseIcon,
  LineChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { IndustryInsightsType } from "./dashboard-view.types";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

const StatisticCard = ({
  industryInsights,
}: {
  industryInsights: IndustryInsightsType;
}) => {
  const getDemandLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusConfig = (
    type: "growthRate" | "outlook",
    value: string | number
  ) => {
    if (type === "growthRate" && typeof value === "number") {
      if (value > 5) return { icon: TrendingUp, color: "text-green-500" };
      if (value >= 0) return { icon: LineChart, color: "text-yellow-500" };
      return { icon: TrendingDown, color: "text-red-500" };
    }
    if (type === "outlook" && typeof value === "string") {
      switch (value.toLowerCase()) {
        case "positive":
          return { icon: TrendingUp, color: "text-green-500" };
        case "neutral":
          return { icon: LineChart, color: "text-yellow-500" };
        case "negative":
          return { icon: TrendingDown, color: "text-red-500" };
      }
    }
    return { icon: LineChart, color: "text-gray-500" };
  };

  const { icon: GrowthIcon, color: growthColor } = getStatusConfig(
    "growthRate",
    industryInsights.growthRate
  );

  const { icon: MarketIcon, color: marketColor } = getStatusConfig(
    "outlook",
    industryInsights.marketOutlook
  );

  const nextUpdateDistance = formatDistanceToNow(
    new Date(industryInsights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Market Outlook */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Market Outlook</CardTitle>
          <MarketIcon
            className={`h-4 w-4 ${marketColor} mt-2`}
            aria-label="Market outlook status"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground capitalize">
            {industryInsights.marketOutlook}
          </p>
          <CardDescription>Next update {nextUpdateDistance}</CardDescription>
        </CardContent>
      </Card>

      {/* Industry Growth */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Industry Growth</CardTitle>
          <GrowthIcon
            className={`h-4 w-4 ${growthColor} mt-2`}
            aria-label="Industry growth trend"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            {industryInsights.growthRate.toFixed(1)}%
          </p>
          <Progress value={industryInsights.growthRate} className="mt-2" />
        </CardContent>
      </Card>

      {/* Demand Level */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Demand Level</CardTitle>
          <BriefcaseIcon
            className="h-4 w-4 text-muted-foreground"
            aria-label="Demand indicator"
          />
        </CardHeader>
        <CardContent>
          <p className="text-xl md:text-2xl font-bold text-foreground capitalize">
            {industryInsights.demandLevel}
          </p>
          <div
            className={`h-2 w-full mt-2 rounded ${getDemandLevelColor(
              industryInsights.demandLevel
            )}`}
          />
        </CardContent>
      </Card>

      {/* Top Skills */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Top Skills</CardTitle>
          <BrainIcon
            className="h-4 w-4 text-muted-foreground"
            aria-label="Skills list"
          />
        </CardHeader>
        <CardContent>
          {industryInsights.topSkills?.length ? (
            <div className="flex flex-wrap">
              {industryInsights.topSkills.map((skill) => (
                <Badge key={skill} variant={"secondary"}>
                  {skill}
                </Badge>
              ))}
            </div>
          ) : (
            <CardDescription className="text-foreground">
              No skills data available
            </CardDescription>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default StatisticCard;
