import { notFound } from "next/navigation";
import { CHAPTERS } from "@/lib/curriculum";
import ChapterRenderer from "@/components/chapter-renderer";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = CHAPTERS.find((c) => c.slug === slug);
  if (!chapter) return notFound();

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-secondary/5">
      <div className="mx-auto max-w-5xl p-6 space-y-8">
        {/* Header */}
        <div className="space-y-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {chapter.title}
              </h1>
              <p className="text-muted-foreground mt-1">{chapter.summary}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 shadow-lg">
          <ChapterRenderer chapter={chapter} />
        </div>
      </div>
    </div>
  );
}
