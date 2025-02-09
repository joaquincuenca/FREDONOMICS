import { Check } from "lucide-react";

interface BenefitsCardProps {
  title: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export function BenefitsCard({
  title,
  top,
  bottom,
  left,
  right,
}: BenefitsCardProps) {
  return (
    <div
      className="lg:flex items-center px-3 py-2 rounded-full gap-2 text-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-sm shadow-lg absolute hidden"
      style={{ top, bottom, left, right }}
    >
      <Check className="p-1 bg-white text-zinc-500 rounded-full" />
      {title}
    </div>
  );
}
