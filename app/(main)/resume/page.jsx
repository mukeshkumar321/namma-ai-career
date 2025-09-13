import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="relative container mx-auto py-6">
      <div className="grid-background" />
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}
