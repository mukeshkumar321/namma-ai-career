import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";

export const features = [
  {
    id: 1,
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "Personalized AI Mentorship",
    description:
      "Leverage AI-driven recommendations to map out career paths, skill development, and opportunities aligned with your goals.",
  },
  {
    id: 2,
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Mock Interviews & Feedback",
    description:
      "Enhance your confidence with simulated interviews tailored to your role, complete with instant performance insights.",
  },
  {
    id: 3,
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Career & Market Analytics",
    description:
      "Access up-to-date insights on hiring trends, salary expectations, and the most in-demand skills across industries.",
  },
  {
    id: 4,
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Professional Resume Builder",
    description:
      "Craft polished, ATS-friendly resumes with AI assistance, highlighting your strengths for maximum impact.",
  },
];
