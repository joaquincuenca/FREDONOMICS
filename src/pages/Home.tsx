import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BenefitsCard } from "@/components/benefits-card";
import React from "react";

const benefits = [
  {
    title: "Tax-Free Retirement",
    bottom: "30rem",
    left: "30rem",
  },
  {
    title: "Debt Elimination",
    top: "15rem",
    right: "30rem",
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
    <div className="h-full w-full relative grid grid-cols-[1fr_0.3fr] gap-6">
      <div className="relative">
        <div className="h-full absolute left-0 grid grid-rows-[auto_1fr]">
          <div>
            <h1 className="md:text-6xl text-4xl uppercase title-h1-p1 relative w-fit rounded-br-3xl bg-white pr-6 pb-2 text-black">
              Build Wealth That Lasts
            </h1>
            <h1 className="md:text-6xl text-4xl uppercase title-h1-p2 relative w-fit rounded-br-3xl bg-white pr-6 pb-2 text-black">
              for Generations
            </h1>
          </div>
          <div className="space-y-8 bg-white h-full w-fit relative pt-6 pb-8 pr-6 title-content">
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
          className="rounded-[2.5rem] relative -z-10 object-cover h-[86vh] w-full object-left"
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
