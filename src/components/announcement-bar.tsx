import { useState, useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
}

export function AnnouncementBar() {
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
        };
      }

      return { days: 0, hours: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute instead of every second for efficiency

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [upcomingWebinar.date]);

  const getCountdownText = () => {
    if (timeLeft.days > 0) {
      return `${timeLeft.days}d ${timeLeft.hours}h left`;
    } else if (timeLeft.hours > 0) {
      return `${timeLeft.hours}h left`;
    } else {
      return "Starting soon!";
    }
  };

  return (
    <div className="w-full bg-secondary py-3 px-8 flex md:flex-row flex-col justify-center items-center gap-2">
      <Badge
        className="uppercase rounded-full border-none bg-primary text-center whitespace-nowrap"
        variant="outline"
      >
        {getCountdownText()}
      </Badge>
      <p className="text-center md:text-left">
        <span className="font-bold">Don't Miss Out! </span>
        Join our exclusive webinar on {upcomingWebinar.title} and learn how to
        build wealth smarter.{" "}
        <Button className="text-black h-fit w-fit p-0 text-base" variant="link">
          Register now
        </Button>
        —spots are limited!
      </p>
    </div>
  );
}
