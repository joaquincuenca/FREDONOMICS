import React from "react";
import { ArrowUpRight } from "lucide-react";

import { BENEFITS, CARDS } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { BenefitsCard } from "@/components/benefits-card";
import { CardStack } from "@/components/card-stock";

export default function Home() {
  return (
    <div className="w-full relative flex md:grid xl:grid-cols-[1fr_0.3fr] flex-col gap-6">
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
            className="rounded-xl object-cover h-full w-full block lg:hidden"
          />
        </div>
        <div className="md:space-y-8 flex gap-14 flex-col justify-between bg-white w-fit lg:mt-[50%] title-content relative">
          <div className="space-y-2 xl:space-y-4">
            <p className="opacity-60 md:w-[300px]">
              Unlock financial freedom with proven strategies for debt
              elimination, tax-free retirement, and lasting generational wealth.
            </p>
            <Button
              className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs"
              variant="outline"
            >
              <Button size="icon" className="rounded-full size-6 md:size-9">
                <ArrowUpRight className="!size-3 md:!size-5" />
              </Button>
              Get Your Free Consultation
            </Button>
          </div>
          <div className="lg:pb-8 xl:mt-0">
            <div className="mb-14 space-y-2 md:hidden">
              <h2 className="text-4xl uppercase">
                Exclusive Webinars: Master Your Financial Future
              </h2>
              <p className="opacity-60">
                Join industry experts in live sessions covering debt
                elimination, tax-free retirement, and wealth-building
                strategies. Reserve your spot today!
              </p>
              <Button
                className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs"
                variant="outline"
              >
                <Button size="icon" className="rounded-full size-6 md:size-9">
                  <ArrowUpRight className="!size-3 md:!size-5" />
                </Button>
                Register Now
              </Button>
            </div>
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
      <div className="grid grid-rows-[1fr_auto] gap-6 pb-8 mt-8 xl:mt-0">
        <img
          src="/images/video-placeholder.png"
          alt="Video Placeholder"
          className="h-full w-full object-cover rounded-[2.5rem] xl:row-start-1 row-start-2"
        />
        <div className="xl:space-y-0 xl:block grid sm:grid-cols-2">
          <h2 className="text-4xl sm:text-5xl xl:text-lg uppercase xl:normal-case">
            The Key to Financial Freedom
          </h2>
          <p className="opacity-60 text-base xl:text-sm">
            Discover how strategic financial planning can help you eliminate
            debt, grow wealth, and secure your future—watch this quick 1-minute
            explainer.
          </p>
        </div>
      </div>
    </div>
  );
}
