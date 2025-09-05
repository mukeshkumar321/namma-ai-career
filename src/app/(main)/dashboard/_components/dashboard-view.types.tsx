export type SalaryRange = {
  max: number;
  min: number;
  role: string;
  median: number;
  location: string;
};

export type IndustryInsightsType = {
  id: string;
  industry: string;
  salaryRanges: SalaryRange[];
  growthRate: number;
  demandLevel: string;
  topSkills: string[];
  marketOutlook: string;
  keyTrends: string[];
  recommendedSkills: string[];
  lastUpdated: string;
  nextUpdate: string;
};
