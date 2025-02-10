import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
  imageUrl?: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      startFlipping();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const startFlipping = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  const handleNext = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className="relative">
      <div className="relative h-40 w-full md:h-60 md:w-full">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white h-full w-full rounded-3xl border border-neutral-200 dark:border-white/[0.1] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              {card.imageUrl && (
                <div className="w-full h-40 rounded-t-xl overflow-hidden">
                  <img
                    src={card.imageUrl || "/api/placeholder/400/320"}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="font-normal text-neutral-700 leading-none mb-2 dark:text-neutral-200">
                  {card.content}
                </div>
                <div>
                  <p className="font-medium text-xs dark:text-white">
                    {card.name}
                  </p>
                  <p className="font-normal text-xs dark:text-neutral-200">
                    {card.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <div
          onClick={handlePrevious}
          className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
          aria-label="Previous card"
        >
          <ChevronLeft className="size-5" />
        </div>
        <div
          onClick={() => {
            setIsAutoPlaying(false);
            handleNext();
          }}
          className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
          aria-label="Next card"
        >
          <ChevronRight className="size-5" />
        </div>
      </div>
    </div>
  );
};
