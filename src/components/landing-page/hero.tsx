import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto mt-36 md:mt-48 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground">
        <span>Welcome to Namma AI</span>
        <br />
        <span>Your AI Career Coach</span>
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
        Start your AI career with personalized guidance and curated resources.
        <br />
        Unlock your potential and stay ahead in AI.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </div>

      <Image
        src="/banner3.jpeg"
        alt="Illustration representing AI career coaching"
        width={1200}
        height={600}
        priority
        sizes="100vw"
        className="mt-12 w-full rounded-lg"
      />
    </section>
  );
};
export default HeroSection;
