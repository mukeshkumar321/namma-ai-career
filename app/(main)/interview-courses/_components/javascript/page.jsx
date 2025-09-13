"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/javascriptQuestion";
import HighlightedCode from "@/components/highlighted-code";

export default function QuestionsPage() {
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
                  if (item.type === "text") {
                    return (
                      <p key={idx} className="text-muted-foreground">
                        {item.content}
                      </p>
                    );
                  } else if (item.type === "code") {
                    return (
                      <HighlightedCode
                        key={idx}
                        code={item.content}
                        language="javascript"
                      />
                    );
                  } else if (item.type === "table") {
                    return (
                      <table
                        key={idx}
                        className="table-auto border border-gray-300 w-full text-sm"
                      >
                        <thead>
                          <tr>
                            {item.content?.headers?.map((header, i) => (
                              <th
                                key={i}
                                className="border px-2 py-1 text-left"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.content?.rows?.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className="border px-2 py-1">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );
                  } else {
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
