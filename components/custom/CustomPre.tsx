import { ReactNode } from "react";

type CustomPreProps = {
  children: ReactNode;
};

const CustomPre = ({ children }: CustomPreProps) => {
  return (
    <div className="bg-linear-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-accent/20">
      <pre className="bg-gray-100 p-4 border rounded-xl">{children}</pre>
    </div>
  );
};

export default CustomPre;
