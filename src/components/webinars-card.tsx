import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";

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
}

export function WebinarsCard({
  title = "Financial Masterclass Webinar",
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum est sit vitae, maxime voluptates neque. Voluptate esse repellendus quia vitae deleniti impedit! Perferendis necessitatibus dolore odit molestias. Architecto, corporis.",
  host = "Finance Expert",
  duration = "69h",
  oldPrice = "$199.99",
  price = "$99.00",
  isOnSale = true,
  tags = ["WEBINAR", "FINANCIAL EDUCATION"],
  imageSrc = "/images/image-placeholder.webp",
  className,
}: WebinarsCardProps) {
  return (
    <div className={cn("w-full rounded-b-3xl shadow-md", className)}>
      <img
        src={imageSrc}
        alt={`${title} - Webinar`}
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="p-4 space-y-2 bg-white rounded-b-3xl pb-6">
        <h1 className="text-xl md:text-2xl">{title}</h1>
        <p className="opacity-60 text-sm md:text-base line-clamp-2">
          {description}
        </p>
        <p>
          By <span className="font-bold text-sm md:text-base">{host}</span>
        </p>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Clock size={14} /> <span className="opacity-60">Webinars time</span>{" "}
          : <p className="font-semibold">{duration}</p>
        </div>
        <div className="text-lg md:text-xl flex items-end gap-2">
          {isOnSale && (
            <h2 className="line-through text-base md:text-lg">{oldPrice}</h2>
          )}
          <h2 className="font-bold text-primary">{price}</h2>
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
  );
}
