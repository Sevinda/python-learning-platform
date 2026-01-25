import { ReactNode } from "react";

type StudyGuideSectionProps = {
  title: string;
  children: ReactNode;
};

const StudyGuideSection = ({ title, children }: StudyGuideSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      {children}
    </section>
  );
};

export default StudyGuideSection;
