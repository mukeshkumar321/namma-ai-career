import { Button } from "@/components/ui/button";

export default function JavaScriptPage() {
  return (
    <main className=" flex py-16 flex-col items-center justify-center overflow-hidden bg-background text-center px-6">
      <h1 className="gradient-title text-3xl md:text-4xl lg:text-5xl">
        JavaScript - Coming Soon
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
        We’re working hard to bring you something amazing. Stay tuned — this
        service will be available very soon!
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button size="lg">Notify Me</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </main>
  );
}
