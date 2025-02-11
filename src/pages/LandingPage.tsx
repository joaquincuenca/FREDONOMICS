import Home from "./sections/Home";
import BookAndFeatures from "./sections/BookAndFeatures";
import Testimonials from "./sections/Testimonials";
import Founder from "./sections/Founder";

export default function LandingPage() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-hidden">
      <Home />
      <BookAndFeatures />
      <Testimonials />
      <Founder />
    </div>
  );
}
