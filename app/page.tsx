import Link from "next/link";
import { CHAPTERS } from "@/lib/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">Python for Edexcel O/L</h1>
      <p className="text-muted-foreground">
        Learn by reading + interacting + practicing.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {CHAPTERS.map((c) => (
          <Link key={c.slug} href={`/learn/${c.slug}`}>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {c.summary}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Link className="underline" href="/questions">
        Go to Practice Questions →
      </Link>
    </div>
  );
}
