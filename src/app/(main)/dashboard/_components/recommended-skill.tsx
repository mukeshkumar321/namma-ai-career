import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const RecommendedSkill = ({ topSkills }: { topSkills: string[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Industry Trends</CardTitle>
        <CardDescription>
          Stay updated with the latest trends shaping the industry.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {topSkills.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2 mt-4">
            {topSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-muted-foreground">No skills available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecommendedSkill;
