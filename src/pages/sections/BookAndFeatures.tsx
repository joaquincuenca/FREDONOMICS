import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/constants";
import { getBorderClasses } from "@/lib/helpers";
import { ArrowUpRight, BadgeCheck, BookOpenText } from "lucide-react";

export default function BookAndFeatures() {
  return (
    <div className="xl:mt-16 md:mt-12 mt-8 grid xl:grid-cols-[1fr_0.6fr] gap-8">
      {/* Features */}
      <div className="w-full h-full bg-slate-100 rounded-[2.5rem] xl:p-8 p-6 grid md:grid-cols-[0.5fr_1fr] gap-4">
        <div className="space-y-4 flex flex-col items-center text-center md:text-left md:block">
          <Badge variant="secondary" className="gap-1 mb-2 w-fit">
            <BadgeCheck size={14} /> Benefits
          </Badge>
          <h1 className="lg:text-5xl text-4xl">
            Financial Freedom, Built for You
          </h1>
          <p className="opacity-60">
            A simple shift in mindset and spending can set you on the path to
            financial freedom and lasting wealth
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 bg-white rounded-[2rem]">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              className={getBorderClasses(index)}
            />
          ))}
        </div>
      </div>

      {/* Book */}
      <div className="grid grid-cols-2 gap-8 bg-slate-100 rounded-[2.5rem]">
        <img
          src="images/book.png"
          alt="Book Placeholder"
          className="w-full h-full object-cover object-right"
        />
        <div className="space-y-4 pr-6 py-6 xl:pr-8 xl:py-8">
          <Badge variant="secondary" className="gap-1 mb-2 w-fit">
            <BookOpenText size={14} /> Featured Book
          </Badge>
          <h1 className="lg:text-5xl text-4xl">Financial Reads</h1>
          <p className="opacity-60">
            A simple shift in mindset and spending can set you on the path to
            financial freedom and lasting wealth
          </p>
          <Button
            className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs"
            variant="outline"
          >
            <Button size="icon" className="rounded-full size-6 md:size-9">
              <ArrowUpRight className="!size-3 md:!size-5" />
            </Button>
            Pre-Order Now!
          </Button>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`space-y-2 flex flex-col justify-center p-4 border-slate-100 ${className}`}
  >
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
      <Icon size={16} />
    </div>
    <h3 className="font-medium text-sm lg:text-base">{title}</h3>
    <p className="text-xs lg:text-sm opacity-60">{description}</p>
  </div>
);
