import { CardContent } from "@/components/ui/card";
import { AssessmentType } from "./assessment.types";
import { CheckCircle2Icon, Trophy, XCircleIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const QuizResult = ({ selectedQuiz }: { selectedQuiz: AssessmentType }) => {
  const formattedScore =
    Number.isInteger(selectedQuiz.quizScore)
      ? selectedQuiz.quizScore
      : selectedQuiz.quizScore.toFixed(1);

  return (
    <CardContent className="mx-auto space-y-8 max-w-full">
 
      {/* Score Overview */}
      <div className="text-center space-y-2" aria-label="Quiz Score Overview">
        <h3 className="text-2xl font-bold">{formattedScore}%</h3>
        <Progress
          value={selectedQuiz.quizScore}
          className="w-full"
          aria-label={`Your score is ${formattedScore} percent`}
        />
      </div>

      {/* Improvement Tip */}
      {selectedQuiz.improvementTip && (
        <div className="bg-muted p-4 rounded-lg space-y-1 break-words">
          <p className="font-medium">Improvement Tip:</p>
          <p className="text-muted-foreground">{selectedQuiz.improvementTip}</p>
        </div>
      )}

      {/* Questions Review */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Question Review</h3>
        {selectedQuiz.questions.map((q, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 space-y-3 break-words max-w-full"
            aria-label={`Question ${index + 1} review`}
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium break-words">{q.question}</h4>
              {q.isCorrect ? (
                <CheckCircle2Icon
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                  aria-label="Correct Answer"
                />
              ) : (
                <XCircleIcon
                  className="h-5 w-5 text-red-500 flex-shrink-0"
                  aria-label="Incorrect Answer"
                />
              )}
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p className="break-words">Your answer: {q.userAnswer}</p>
              {!q.isCorrect && (
                <p className="break-words">Correct answer: {q.answer}</p>
              )}
            </div>

            <div className="text-sm bg-muted p-2 rounded break-words">
              <p className="font-medium">Explanation:</p>
              <p>{q.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
};

export default QuizResult;
