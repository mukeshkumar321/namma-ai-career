import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Quiz from "../_components/quiz";
export default function MockTest() {
  return (
    <div className="relative">
      <div className="grid-background" aria-hidden="true" />
      <div className="container mx-auto p-4 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Interview Preparation
        </h1>
        <div className="flex flex-col gap-2">
          <Link
            href="/interview"
            className="flex items-center gap-2 text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Interview Preparation
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Take a Mock Quiz</h1>
          <p className="text-muted-foreground">
            Get started with our mock quizzes to assess your knowledge and
            readiness.
          </p>
        </div>
        <Quiz />
      </div>
    </div>
  );
}
