import React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BenefitsCard } from "@/components/benefits-card";

const benefits = [
  {
    title: "Tax-Free Retirement",
    bottom: "30rem",
    left: "30rem",
  },
  {
    title: "Debt Elimination",
    top: "15rem",
    left: "40rem",
  },
  {
    title: "Generational Wealth",
    bottom: "15rem",
    right: "5rem",
  },
  {
    title: "Living Benefits",
    top: "20rem",
    right: "10rem",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full relative flex md:grid xl:grid-cols-[1fr_0.3fr] flex-col gap-6">
      <div className="relative md:grid md:grid-cols-[auto_1fr] flex flex-col gap-4 md:gap-6">
        <div className="md:h-full lg:absolute left-0 grid grid-rows-[auto_1fr]">
          <div>
            <h1 className="md:text-6xl text-5xl uppercase title-h1-p1 relative w-fit rounded-br-3xl bg-white lg:pr-6 lg:pb-2 text-black">
              Build Wealth That Lasts
            </h1>
            <h1 className="md:text-6xl text-5xl uppercase title-h1-p2 relative w-fit rounded-br-3xl bg-white lg:pr-6 lg:pb-2 text-black">
              for Generations
            </h1>
          </div>
        </div>
        <div className="space-y-4 md:space-y-8 bg-white w-fit lg:mt-[50%] title-content relative">
          <p className="opacity-60 md:w-[300px]">
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
        <img
          src="/images/family.jpg"
          alt="Family in a field"
          className="rounded-[2.5rem] relative -z-10 object-cover h-[86vh] w-full object-left lg:block hidden"
        />
        {benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            <BenefitsCard {...benefit} />
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-rows-[1fr_auto] gap-6 pb-8">
        <img
          src="/images/video-placeholder.png"
          alt="Video Placeholder"
          className="h-full w-full object-cover rounded-[2.5rem]"
        />
        <div>
          <h2 className="text-lg">The Key to Financial Freedom</h2>
          <p className="opacity-60 text-sm">
            Discover how strategic financial planning can help you eliminate
            debt, grow wealth, and secure your future—watch this quick 1-minute
            explainer.
          </p>
        </div>
      </div>
    </div>
  );
}
