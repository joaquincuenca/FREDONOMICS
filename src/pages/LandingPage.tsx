import Home from "./sections/Home";
import BookAndFeatures from "./sections/BookAndFeatures";
import Testimonials from "./sections/Testimonials";
import Founder from "./sections/Founder";

import { FeaturedWebinar } from "@/components/featured-webinar";

export default function LandingPage() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-hidden">
      <Home />
      <BookAndFeatures />
      <Testimonials />
      <div className="xl:mt-16 md:mt-12">
        <FeaturedWebinar />
      </div>
      <Founder />
    </div>
  );
}
