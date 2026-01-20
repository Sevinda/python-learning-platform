import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Question } from "@/lib/questions";

export default function QuestionCard({ q }: { q: Question }) {
  return (
    <div className="rounded-lg border p-4 space-y-2">
      <pre className="whitespace-pre-wrap text-sm">{q.prompt}</pre>

      <Accordion type="single" collapsible>
        <AccordionItem value="answer">
          <AccordionTrigger>Reveal answer</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <pre className="whitespace-pre-wrap rounded-md border p-3 text-sm">
              {q.answer}
            </pre>
            {q.explanation ? (
              <p className="text-sm text-muted-foreground">{q.explanation}</p>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
