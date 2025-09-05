"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import { IndustryInsightsType } from "./dashboard-view.types";

const SalaryRangeChart = ({
  salaryRanges,
}: {
  salaryRanges: IndustryInsightsType["salaryRanges"];
}) => {
  if (!salaryRanges?.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Salary Ranges</CardTitle>
          <CardDescription>No salary data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Ranges</CardTitle>
        <CardDescription>
          Compare minimum, median, and maximum salaries across roles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={400}
          aria-label="Salary range bar chart showing min, median, and max salaries across roles"
        >
          <BarChart
            data={salaryRanges}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg p-2 shadow-md">
                      <p className="font-medium">{label}</p>
                      {payload.map((item) => (
                        <p key={item.name} className="text-sm">
                          {item.name}: ${item.value}
                        </p>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Bar dataKey="min" fill="#e74c3c" name="Min Salary" />
            <Bar dataKey="median" fill="#3498db" name="Median Salary" />
            <Bar dataKey="max" fill="#2ecc71" name="Max Salary" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalaryRangeChart;
