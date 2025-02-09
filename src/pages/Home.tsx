import React from "react";
import { ArrowUpRight } from "lucide-react";

import { BENEFITS, CARDS } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { BenefitsCard } from "@/components/benefits-card";
import { CardStack } from "@/components/card-stock";

export default function Home() {
  return (
    <div className="h-full w-full relative flex md:grid xl:grid-cols-[1fr_0.3fr] flex-col gap-6">
      <div className="relative md:grid md:grid-cols-[auto_1fr] flex flex-col gap-4 md:gap-6">
        <div className="md:h-full lg:absolute left-0 grid grid-rows-[auto_1fr] sm:gap-8">
          <div className="hidden lg:block">
            <h1 className="text-6xl uppercase title-h1-p1 relative w-fit rounded-br-3xl bg-white lg:pr-6 lg:pb-2 text-black">
              Build Wealth That Lasts
            </h1>
            <h1 className="text-6xl uppercase title-h1-p2 relative w-fit rounded-br-3xl bg-white lg:pr-6 lg:pb-2 text-black">
              for Generations
            </h1>
          </div>
          <h1 className="uppercase text-5xl lg:hidden">
            Build Wealth That Lasts for Generations
          </h1>
          <img
            src="/images/family.jpg"
            alt="Family in a field"
            className="rounded-xl object-cover h-full w-full hidden sm:block lg:hidden"
          />
        </div>
        <div className="md:space-y-8 flex gap-14 flex-col justify-between bg-white w-fit lg:mt-[50%] title-content relative">
          <div className="space-y-4">
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
          <div className="lg:pb-8">
            <CardStack items={CARDS} />
          </div>
        </div>
        <img
          src="/images/family.jpg"
          alt="Family in a field"
          className="rounded-[2.5rem] relative -z-10 object-cover h-[86vh] w-full lg:block hidden"
        />
        {BENEFITS.map((benefit, index) => (
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
