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
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">{chapter.title}</h1>
      <p className="text-muted-foreground">{chapter.summary}</p>

      <ChapterRenderer chapter={chapter} />
    </div>
  );
}
