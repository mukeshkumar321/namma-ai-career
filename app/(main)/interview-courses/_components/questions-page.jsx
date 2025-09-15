"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import HighlightedCode from "@/components/highlighted-code";
import ReactMarkdown from "react-markdown";

const AnswerText = ({ content }) => (
  <ReactMarkdown className="text-muted-foreground prose prose-sm max-w-full">
    {content}
  </ReactMarkdown>
);

const AnswerCode = ({ content, language }) => (
  <HighlightedCode code={content} language={language || "javascript"} />
);

const AnswerTable = ({ headers = [], rows = [] }) => (
  <div className="overflow-x-auto">
    <table className="table-auto border border-gray-300 w-full text-sm border-collapse">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="border px-2 py-1 text-left" scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="odd:bg-muted/5">
            {row.map((cell, j) => (
              <td key={j} className="border px-2 py-1">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ✅ New AnswerList component
const AnswerList = ({ content }) => (
  <div className="space-y-1 text-muted-foreground">
    {content.map((point, i) => (
      <ReactMarkdown key={i}>{String(point)}</ReactMarkdown>
    ))}
  </div>
);


function QuestionsPage({ questions, name }) {
  if (!questions || questions.length === 0) {
    return (
      <main className="flex py-16 flex-col items-center justify-center overflow-hidden bg-background text-center px-6">
        <h1 className="gradient-title text-xl md:text-2xl lg:text-3xl">
          No questions available for {name} yet.
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

  return (
    <main className="w-full mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {questions.map((q) => (
          <AccordionItem key={q.id} value={`item-${q.id}`}>
            <AccordionTrigger className="text-left">
              {q.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 py-2">
                {q.answer.map((item, idx) => {
                  switch (item.type) {
                    case "text":
                      return <AnswerText key={idx} content={item.content} />;
                    case "code":
                      return (
                        <AnswerCode
                          key={idx}
                          content={item.content}
                          language={item.language}
                        />
                      );
                    case "table":
                      return (
                        <AnswerTable
                          key={idx}
                          headers={item.content?.headers}
                          rows={item.content?.rows}
                        />
                      );
                    case "list": // ✅ handle lists
                      return <AnswerList key={idx} content={item.content} />;
                    default:
                      return null;
                  }
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

export default QuestionsPage;
