import { Check, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

interface WebinarsCardProps {
  title?: string;
  description?: string;
  host?: string;
  duration?: string;
  oldPrice?: string;
  price?: string;
  isOnSale?: boolean;
  tags?: string[];
  imageSrc?: string;
  className?: string;
  lessons?: string[];
  showTooltip?: boolean;
}

export function WebinarsCard({
  title = "Financial Masterclass Webinar",
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum est sit vitae, maxime voluptates neque. Voluptate esse repellendus quia vitae deleniti impedit! Perferendis necessitatibus dolore odit molestias. Architecto, corporis.",
  host = "Finance Expert",
  duration = "69h",
  oldPrice = "₱199.99",
  price = "₱99.00",
  isOnSale = true,
  tags = ["WEBINAR", "FINANCIAL EDUCATION"],
  imageSrc = "/images/image-placeholder.webp",
  lessons = [],
  showTooltip = true,
  className,
}: WebinarsCardProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              "w-full rounded-b-3xl shadow-md  text-left",
              className
            )}
          >
            <img
              src={imageSrc}
              alt={`${title} - Webinar`}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-4 space-y-2 bg-white rounded-b-3xl pb-6">
              <h1 className="text-xl md:text-2xl">{title}</h1>
              {/* <p className="opacity-60 text-sm md:text-base line-clamp-2">
                {description}
              </p> */}
              <p>
                By{" "}
                <span className="font-bold text-sm md:text-base">{host}</span>
              </p>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Clock size={14} />{" "}
                <span className="opacity-60">Webinars time</span> :{" "}
                <p className="font-semibold">{duration}</p>
              </div>
              <div className="text-lg md:text-xl flex items-end gap-2">
                {isOnSale && (
                  <h2 className="line-through text-base md:text-lg">
                    {oldPrice}
                  </h2>
                )}
                <h2 className="font-bold text-green-600">{price}</h2>
              </div>
              <div className="flex flex-wrap gap-2 uppercase text-sm md:text-base">
                {tags.map((tag, index) => (
                  <p key={index} className="px-3 py-0.5 border border-black">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </TooltipTrigger>
        {showTooltip && (
          <TooltipContent
            side="left"
            className="text-base bg-white border p-4 shadow-lg text-black space-y-3 max-w-md rounded-xl"
          >
            <h1 className="font-medium md:text-xl text-lg">{title}</h1>
            <div className="flex flex-wrap gap-1 opacity-60 text-sm md:text-base">
              <p>{duration} total hours •</p>
              {tags.map((tag, index) => (
                <p key={index}>
                  {tag}
                  {index < tags.length - 1 ? " •" : ""}
                </p>
              ))}
            </div>
            <p>{description}</p>
            <ul className="space-y-1 pb-4 flex flex-col">
              <h2 className="font-medium">What you will learn:</h2>
              {lessons.map((lesson, index) => (
                <li key={index} className="inline-flex gap-2 items-center">
                  <Check size={14} strokeWidth={4} />
                  {lesson}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="secondary">
              Join Training Now
            </Button>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
