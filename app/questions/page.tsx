import { CHAPTERS } from "@/lib/curriculum";
import { QUESTIONS } from "@/lib/questions";
import QuestionCard from "@/components/questions/question-card";

export default function QuestionsPage() {
  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Practice Questions</h1>
      <p className="text-muted-foreground">
        Try first, then reveal the answer.
      </p>

      {CHAPTERS.map((c) => {
        const qs = QUESTIONS.filter((q) => q.chapterSlug === c.slug);
        if (qs.length === 0) return null;

        return (
          <section key={c.slug} className="space-y-3">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <div className="space-y-3">
              {qs.map((q) => (
                <QuestionCard key={q.id} q={q} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
