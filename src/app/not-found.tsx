import { Button } from "@/components/ui/button";
import { NotepadTextDashedIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <NotepadTextDashedIcon
          aria-hidden="true"
          className="mx-auto h-32 w-32 text-muted-foreground"
        />
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="max-w-md text-muted-foreground">
          Sorry, the page you’re looking for doesn’t exist or may have been
          moved.
        </p>
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </main>
  );
}
