"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AssessmentType } from "./assessment.types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import QuizResult from "./quiz-result";
import { Trophy } from "lucide-react";

const RecentQuizzes = ({ assessments }: { assessments: AssessmentType[] }) => {
  const [selectedQuiz, setSelectedQuiz] = React.useState<AssessmentType | null>(
    null
  );

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <CardTitle className="text-2xl md:text-3xl">
              Recent Quizzes
            </CardTitle>
            <CardDescription>
              Track your recent quiz attempts and scores.
            </CardDescription>
          </div>
          <CardAction>
            <Button asChild>
              <Link href="/interview/mock">Start New Quiz</Link>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {!assessments.length && (
            <p className="text-muted-foreground text-center">
              No recent quizzes yet. Start one now!
            </p>
          )}

          {assessments.map((assessment, i) => (
            <Card
              key={assessment.id}
              className="bg-background cursor-pointer hover:border-accent-foreground/50 transition rounded-xl shadow-sm"
              aria-label={`Quiz Attempt ${i + 1}, scored ${
                assessment.quizScore
              }% on ${format(new Date(assessment.createdAt), "PPpp")}`}
              onClick={() => setSelectedQuiz(assessment)}
            >
              <CardHeader>
                <CardTitle>{`Quiz Attempt ${i + 1}`}</CardTitle>
                <CardDescription className="flex flex-col md:flex-row md:justify-between text-sm gap-1">
                  <span>Score: {assessment.quizScore}%</span>
                  <span>
                    Attempted on{" "}
                    {format(new Date(assessment.createdAt), "PPpp")}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="truncate">
                  <span className="font-bold">Improvement Tip:</span>{" "}
                  {assessment.improvementTip ||
                    "No tips for this quiz, you did great!"}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Quiz Detail Dialog */}
      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogTitle className="flex items-center gap-2 text-3xl gradient-title break-words">
            <Trophy className="h-6 w-6 text-yellow-500 flex-shrink-0" />
            Quiz Results
          </DialogTitle>
          {selectedQuiz && <QuizResult selectedQuiz={selectedQuiz} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecentQuizzes;
