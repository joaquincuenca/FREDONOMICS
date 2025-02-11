import { MessageSquareQuote } from "lucide-react";

import { TESTIMONIALS } from "@/lib/constants";

import { Badge } from "@/components/ui/badge";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="xl:mt-16 md:mt-12 mt-8 flex flex-col items-center">
      <Badge variant="secondary" className="gap-1 mb-2">
        <MessageSquareQuote size={14} /> Testimonials
      </Badge>
      <div className="text-center space-y-4">
        <h1 className="lg:text-5xl text-4xl">
          Words of praise from others
          <br />
          about our service
        </h1>
        <p className="opacity-60">
          Find out how our clients are spreading the word!
        </p>
      </div>
      <div className="my-4 grid">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
