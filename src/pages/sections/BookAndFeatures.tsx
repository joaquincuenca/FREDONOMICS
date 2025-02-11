import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpenText } from "lucide-react";

export default function BookAndFeatures() {
  return (
    <div className="xl:mt-16 md:mt-12 mt-8 grid lg:grid-cols-2 xl:grid-cols-[0.6fr_1fr] gap-8">
      {/* Book */}
      <div className="grid grid-cols-2 gap-8 bg-neutral-200 rounded-[2.5rem]">
        <img
          src="images/book.png"
          alt="Book Placeholder"
          className="w-full h-full object-cover object-right"
        />
        <div className="space-y-4 pr-6 py-6 xl:pr-8 xl:py-8 flex h-full justify-center flex-col">
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

        <div className="w-full items-center justify-center flex"></div>
      </div>
      {/* Features */}
      <div className="w-full h-full bg-yellow-200"></div>
    </div>
  );
}
