import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    id: 1,
    title: "Professional Onboarding",
    description:
      "Share your industry background and expertise for personalized guidance.",
    icon: <UserPlus aria-hidden="true" className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Craft Your Documents",
    description:
      "Build ATS-friendly resumes and compelling cover letters with ease.",
    icon: <FileEdit aria-hidden="true" className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    title: "Prepare for Interviews",
    description:
      "Ace your interviews with AI-powered mock sessions tailored to your role.",
    icon: <Users aria-hidden="true" className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    title: "Track Your Progress",
    description:
      "Stay motivated by monitoring improvements with detailed analytics.",
    icon: <LineChart aria-hidden="true" className="h-8 w-8 text-primary" />,
  },
];
