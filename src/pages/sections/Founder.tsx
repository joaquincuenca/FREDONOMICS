import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Plus } from "lucide-react";

export default function Founder() {
  return (
    <div className="xl:mt-16 md:mt-12 mt-8 flex flex-col items-center w-full h-screen xl:h-[80vh] relative">
      <Badge variant="secondary" className="gap-1 mb-2 w-fit">
        <Briefcase size={14} /> The Founder
      </Badge>
      <h1 className="lg:text-5xl text-4xl mb-4">Meet Your Speaker</h1>
      <div className="flex flex-col items-center xl:items-start w-full gap-4">
        <h2
          className="uppercase font-bold tracking-tight text-[clamp(2rem,15vw,12rem)] xl:text-[clamp(3rem,19vw,23rem)] leading-none w-full text-center"
          style={{
            letterSpacing: "clamp(-0.02em, -0.01em, 0em)",
            lineHeight: "clamp(0.8, 0.8, 0.9)",
          }}
        >
          D'Andrea
        </h2>
        <p className="xl:ml-[clamp(1rem,1.5vw,2rem)] opacity-60 xl:w-[30vw] w-2/3 xl:text-left text-center">
          D’Andrea is an insurance broker and annuities specialist on a mission
          to level the financial playing field for low and middle-income
          families. As the founder of FRED Financial Services, she’s dedicated
          to teaching how to use the living benefits of life insurance to build
          real wealth.{" "}
          <span className="xl:hidden">
            Author of "
            <span className="font-semibold">
              For the Cost of a Burger, You Could Be Rich!
            </span>
            ", D’Andrea breaks down wealth-building into simple steps based on
            her personal journey. Her goal! To give you the tools to take
            control of your finances and build a lasting legacy.
          </span>
        </p>
        <Button
          className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs flex xl:hidden mb-4"
          variant="outline"
        >
          <Button size="icon" className="rounded-full size-6 md:size-9">
            <Plus className="!size-3 md:!size-5" />
          </Button>
          Learn More
        </Button>
      </div>
      <img
        src="images/the-founder.png"
        alt="The Founder, D'Andrea"
        className="xl:absolute bottom-0 h-[60vh]"
      />
      <div className="hidden absolute bottom-4 right-0 xl:flex flex-col items-end w-full gap-4">
        <p className="opacity-60 xl:w-[30vw] xl:text-right">
          Author of "
          <span className="font-semibold">
            For the Cost of a Burger, You Could Be Rich!
          </span>
          ", D’Andrea breaks down wealth-building into simple steps based on her
          personal journey. Her goal! To give you the tools to take control of
          your finances and build a lasting legacy.
        </p>
        <Button
          className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-1 pr-2 md:p-2 md:pr-4 md:text-sm text-xs flex"
          variant="outline"
        >
          <Button size="icon" className="rounded-full size-6 md:size-9">
            <Plus className="!size-3 md:!size-5" />
          </Button>
          Learn More
        </Button>
      </div>
    </div>
  );
}
