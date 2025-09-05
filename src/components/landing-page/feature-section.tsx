import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "@/data/features";
import { statistics } from "@/data/statistics";
import { howItWorks } from "@/data/howItWorks";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { Button } from "../ui/button";

const FeatureSection = () => {
  return (
    <div className="flex flex-col">
      {/* Features Section */}
      <section className="container mx-auto flex flex-col items-center py-20">
        <h2 className="mb-8 text-3xl font-bold">
          Powerful Features for Your AI Career
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="max-w-sm transition-shadow hover:border-foreground"
            >
              <CardContent className="flex flex-col items-center gap-2 text-center p-6">
                <span aria-hidden="true" className="h-10 w-10 text-primary">
                  {feature.icon}
                </span>
                <CardTitle className="mb-2 text-xl font-semibold">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full bg-muted-foreground/10 py-20">
        <h2 className="sr-only">Our Achievements</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
                {stat.data}
              </p>
              <p className="text-sm md:text-base lg:text-lg">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="my-6 max-w-2xl text-xl text-muted-foreground">
          Four key steps to kickstart your AI career.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div
              key={item.id}
              className="flex max-w-sm flex-col items-center gap-2 text-center"
            >
              <span
                aria-hidden="true"
                className="rounded-full bg-muted-foreground/30 p-4"
              >
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="max-w-2xl text-md text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto flex flex-col items-center py-20">
        <h2 className="mb-8 text-3xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id} className="max-w-sm">
              <CardContent className="flex flex-col gap-2 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-xl font-semibold">
                      {item.author}
                    </CardTitle>
                    <CardDescription>{item.role}</CardDescription>
                    <CardDescription>{item.company}</CardDescription>
                  </div>
                </div>
                <blockquote className="text-md text-muted-foreground max-w-2xl">
                  “{item.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="my-6 max-w-2xl text-xl text-muted-foreground">
          Answers to common questions about our AI career services.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-lg bg-muted-foreground/10 px-8 py-4"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Community Section */}
      <section className="w-full bg-gradient-to-b from-primary to-primary/50 py-12 md:py-20">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-background">
            Join Our Community of AI Professionals
          </h2>
          <p className="md:text-lg text-background/80">
            Connect with like-minded individuals and enhance your skills
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-6 h-11 border border-border bg-background/90 text-primary transition hover:border-primary hover:bg-background hover:text-primary focus:ring-2 focus:ring-ring"
          >
            <Link href="/dashboard">
              Start Your Journey Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
