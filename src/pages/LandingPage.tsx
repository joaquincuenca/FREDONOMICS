import Home from "./Home";
import BookAndFeatures from "./sections/BookAndFeatures";
import Testimonials from "./sections/Testimonials";

export default function LandingPage() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Home />
      <BookAndFeatures />
      <Testimonials />
    </div>
  );
}
