import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WebinarsCard } from "@/components/webinars-card";
import { WEBINAR_ITEMS } from "@/lib/constants";
import { ArrowUpRight, Check } from "lucide-react";

export default function WebinarsAndEvents() {
  return (
    <div className="space-y-16 mb-16">
      {/* header if user is not registered */}
      <div className="grid md:grid-cols-[1fr_0.5fr] gap-8">
        {/* title */}
        <div className="space-y-4">
          <Badge variant="secondary">Wealthy Mastery Certified</Badge>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl">
            Elevate Your Wealth Strategy with Expert-Led Training
          </h1>
        </div>
        {/* form */}
        <div className="self-end space-y-2 flex flex-col items-center">
          <Input placeholder="Enter your email" />
          <Button className="w-full bg-black">
            Join our Growing Community!
          </Button>
          <div className="flex items-center gap-2 text-xs">
            <p className="flex items-center gap-1">
              <Check
                className="p-0.5 bg-primary rounded-full text-white size-4"
                strokeWidth={4}
              />
              Lifetime Access
            </p>
            <p className="flex items-center gap-1">
              <Check
                className="p-0.5 bg-primary rounded-full text-white size-4"
                strokeWidth={4}
              />{" "}
              Cancel Anytime
            </p>
          </div>
        </div>
      </div>

      {/* courses header */}
      <div className="grid md:grid-cols-2 xl:grid-cols-[0.8fr_1fr] gap-8">
        <div className="relative h-[500px] flex items-center justify-center md:row-start-1 row-start-2">
          {/* blue circle shape */}
          <div className="absolute bottom-16 left-12 w-20 h-20 bg-blue-300 rounded-full opacity-50 z-0 animate-pulse"></div>

          {/* red rounded rectangle */}
          <div className="absolute top-24 right-16 w-16 h-12 bg-red-400 rounded-lg opacity-40 z-0 rotate-12"></div>

          {/* Small blue square */}
          <div className="absolute top-32 left-24 w-8 h-8 bg-blue-400 rounded-sm opacity-60 z-0 -rotate-12"></div>

          {/* Small red circle */}
          <div className="absolute bottom-32 right-20 w-10 h-10 bg-red-300 rounded-full opacity-50 z-0"></div>

          {/* WebinarsCard container */}
          <div className="relative w-60 md:w-72 h-96 z-10">
            <WebinarsCard
              className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 rotate-12 z-20 shadow-2xl cursor-default"
              showTooltip={false}
            />
            <WebinarsCard
              className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10 cursor-default"
              title="Other Title"
              showTooltip={false}
            />
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-4">
            <Badge variant="secondary">Why You Need Financial Education</Badge>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Webinars & Training Tailored for Your Wealth Journey
            </h2>
            <p className="opacity-60">
              Explore expert-led sessions designed to help you master debt
              elimination, tax-free retirement, and generational wealth
              strategies. Choose the right training for your financial goals and
              start today!
            </p>
          </div>

          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <Check
                className="p-0.5 bg-primary rounded-full text-white size-4"
                strokeWidth={4}
              />
              <span>100+ Hours of Expert Insights</span>
            </p>
            <p className="flex items-center gap-2">
              <Check
                className="p-0.5 bg-primary rounded-full text-white size-4"
                strokeWidth={4}
              />
              <span>Join Online or In-Person</span>
            </p>
            <Button
              className="text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs mt-4"
              variant="outline"
            >
              <Button size="icon" className="rounded-full size-6 md:size-9">
                <ArrowUpRight className="!size-3 md:!size-5" />
              </Button>
              <span className="ml-2">Explore Webinars</span>
            </Button>
          </div>
        </div>
      </div>

      {/* courses */}
      <div className="pt-16 flex flex-col items-center gap-8">
        <div className="space-y-4 flex flex-col items-center">
          <Badge variant="secondary">Wealthy Mastery Certified</Badge>
          <h2 className="text-center text-4xl md:text-5xl">
            Your Path to Financial
            <br />
            Knowledge Has No Limits
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {WEBINAR_ITEMS.map((webinar, index) => (
            <WebinarsCard key={index} {...webinar} />
          ))}
        </div>
        <Button className="mt-4 bg-black">Explore more</Button>
      </div>
    </div>
  );
}
