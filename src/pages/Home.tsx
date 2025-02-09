import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full w-full relative grid">
      <div className="h-full absolute left-0 grid grid-rows-[auto_1fr]">
        <div>
          <h1 className="md:text-6xl text-4xl uppercase title-h1-p1 relative w-fit rounded-br-3xl bg-white pr-6 pb-2 text-black">
            Build Wealth That Lasts
          </h1>
          <h1 className="md:text-6xl text-4xl uppercase title-h1-p2 relative w-fit rounded-br-3xl bg-white pr-6 pb-2 text-black">
            for Generations
          </h1>
        </div>
        <div className="space-y-8 bg-white h-full w-fit relative pt-6 pb-8 title-content">
          <p className="opacity-60 w-[300px]">
            Unlock financial freedom with proven strategies for debt
            elimination, tax-free retirement, and lasting generational wealth.
          </p>
          <Button
            className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-2 pr-4"
            variant="outline"
          >
            <Button size="icon" className="rounded-full">
              <ArrowUpRight />
            </Button>
            Get Your Free Consultation
          </Button>
        </div>
      </div>
      <img
        src="/images/family.jpg"
        alt="Family in a field"
        className="left-6 rounded-[2.5rem] -z-10 object-cover h-[86vh] w-full object-left"
      />
    </div>
  );
}
