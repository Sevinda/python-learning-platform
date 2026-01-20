export type Question = {
  id: string;
  chapterSlug: string;
  prompt: string;
  answer: string;
  explanation?: string;
};

export const QUESTIONS: Question[] = [
  {
    id: "q-for-1",
    chapterSlug: "loops-for",
    prompt: `What is the output?\n\nfor i in range(1, 6):\n    print(i)`,
    answer: `1\n2\n3\n4\n5`,
    explanation: "range(1, 6) starts at 1 and stops before 6.",
  },
];
