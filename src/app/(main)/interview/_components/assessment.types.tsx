export interface QuizQuestion {
  answer: string;
  question: string;
  isCorrect: boolean;
  userAnswer: string;
  explanation: string;
}

export interface AssessmentType {
  id: string;
  userId: string;
  quizScore: number;
  questions: QuizQuestion[];
  category: string;
  improvementTip: string | null;
  createdAt: string;
  updatedAt: string;
}
