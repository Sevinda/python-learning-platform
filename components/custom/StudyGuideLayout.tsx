"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

type StudyGuideLayoutProps = {
  title: string;
  children: ReactNode;
};

const StudyGuideLayout = ({ title, children }: StudyGuideLayoutProps) => {
  const router = useRouter();

  return (
    <div className="min-h-screen py-8">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-accent/50"
            onClick={() => router.back()}
          >
            ← Back
          </Button>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl pb-1 font-bold bg-linear-to-r from-cyan-400 via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-accent rounded-full"></div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">{children}</div>
    </div>
  );
};

export default StudyGuideLayout;
