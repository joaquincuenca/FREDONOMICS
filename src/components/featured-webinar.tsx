import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { WEBINAR_ITEMS } from "@/lib/constants";

interface WebinarItem {
  title: string;
  description: string;
  host: string;
  duration: string;
  oldPrice: string;
  price: string;
  isOnSale: boolean;
  tags: string[];
  lessons?: string[];
  date: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function FeaturedWebinar() {
  const getUpcomingWebinar = (): WebinarItem => {
    const now = new Date();
    const futureWebinars = WEBINAR_ITEMS.filter(
      (webinar) => new Date(webinar.date) > now
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return futureWebinars.length > 0 ? futureWebinars[0] : WEBINAR_ITEMS[0];
  };

  const upcomingWebinar = getUpcomingWebinar();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference =
        new Date(upcomingWebinar.date).getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [upcomingWebinar.date]);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const showDays = timeLeft.days > 0;

  return (
    <div className="space-y-4">
      <Badge variant="secondary">Upcoming Event</Badge>
      <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold">
        {upcomingWebinar.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-4">
        <div className="bg-neutral-100 p-4 rounded-xl space-y-1">
          <img
            src="/images/image-placeholder.webp"
            alt={`${upcomingWebinar.title} - Webinar`}
            className="w-full h-32 md:h-48 object-cover rounded-lg"
          />
          <h2 className="uppercase font-medium text-secondary">
            What you'll discover:
          </h2>
          <ul className="flex flex-col ml-2">
            {upcomingWebinar.lessons?.map((lesson, index) => (
              <li key={index} className="inline-flex gap-2 items-center">
                <Check size={14} strokeWidth={4} /> {lesson}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-100 p-4 rounded-xl space-y-4 grid grid-rows-[1fr_auto_auto] gap-4">
          <div
            className={`grid ${
              showDays
                ? "grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]"
                : "grid-cols-[1fr_auto_1fr_auto_1fr]"
            } gap-4`}
          >
            {showDays && (
              <>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-5xl lg:text-6xl font-bold">
                    {formatTime(timeLeft.days)}
                  </p>
                  <h3 className="opacity-60 uppercase lg:text-lg">Days</h3>
                </div>
                <Separator orientation="vertical" />
              </>
            )}
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl lg:text-6xl font-bold">
                {formatTime(timeLeft.hours)}
              </p>
              <h3 className="opacity-60 uppercase lg:text-lg">Hours</h3>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl lg:text-6xl font-bold">
                {formatTime(timeLeft.minutes)}
              </p>
              <h3 className="opacity-60 uppercase lg:text-lg">Minute</h3>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl lg:text-6xl font-bold">
                {formatTime(timeLeft.seconds)}
              </p>
              <h3 className="opacity-60 uppercase lg:text-lg">Second</h3>
            </div>
          </div>
          <p>{upcomingWebinar.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2">
            <Button>Join Training Now!</Button>
            <Button variant="outline" className="bg-transparent">
              More Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
