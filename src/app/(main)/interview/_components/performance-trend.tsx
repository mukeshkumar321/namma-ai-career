"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AssessmentType } from "./assessment.types";
import { format } from "date-fns";

const PerformanceTrend = ({
  assessments,
}: {
  assessments: AssessmentType[];
}) => {
  if (!assessments?.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            Performance Trend
          </CardTitle>
          <CardDescription>No performance data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const data = assessments.map((assessment) => ({
    createdAt: format(new Date(assessment.createdAt), "MMM dd"),
    quizScore: assessment.quizScore,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Track your quiz scores over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={400}
          aria-label="Quiz performance trend chart"
        >
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis domain={[0, 100]} />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg p-2 shadow-md">
                      <p className="font-medium">{`Date: ${label}`}</p>
                      <p className="text-sm">{`Quiz Score: ${payload[0].value}%`}</p>
                    </div>
                  );
                }
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="quizScore"
              stroke="#4a90e2"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Quiz Score (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceTrend;
