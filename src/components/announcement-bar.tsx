import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-secondary py-3 px-8 flex md:flex-row flex-col justify-center items-center gap-2">
      <Badge
        className="uppercase rounded-full border-none bg-primary text-center"
        variant="outline"
      >
        upcoming event
      </Badge>
      <p>
        <span className="font-bold">Don't Miss Out! </span> Join our exclusive
        webinar on [Topic] and learn how to build wealth smarter.{" "}
        <Button className="text-black h-fit w-fit p-0 text-base" variant="link">
          Register now
        </Button>
        —spots are limited!
      </p>
    </div>
  );
}
