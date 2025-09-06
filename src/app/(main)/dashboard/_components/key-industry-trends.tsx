import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const KeyIndustryTrends = ({ keyTrends }: { keyTrends: string[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">Key Industry Trends</CardTitle>
        <CardDescription>
          Stay updated with the latest trends shaping the industry.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {keyTrends.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2 mt-4">
            {keyTrends.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-muted-foreground">No trends available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default KeyIndustryTrends;
