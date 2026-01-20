import Link from "next/link";
import { CHAPTERS } from "@/lib/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-primary/5">
      <div className="mx-auto max-w-6xl p-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🐍 Interactive Python Learning
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Python for Edexcel O/L
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master Python through reading, interactive exercises, and hands-on
            practice.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((c, index) => (
            <Link key={c.slug} href={`/learn/${c.slug}`}>
              <Card className="hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {c.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {c.summary}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-8">
          <Link
            href="/questions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Practice Questions
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
