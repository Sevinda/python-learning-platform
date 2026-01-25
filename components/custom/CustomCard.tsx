import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type CustomCardProps = {
  title: string;
  description: string;
  href: string;
};

const CustomCard = ({ title, description, href }: CustomCardProps) => {
  return (
    <Link href={href} className="group">
      <Card className="h-full border border-accent/20 bg-linear-to-br from-background to-accent/5 hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer group-hover:scale-[1.02]">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default CustomCard;
