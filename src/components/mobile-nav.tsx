import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = () => {
  const navItems = {
    About: [
      {
        title: "Our Story",
        description: "Company mission + founder's journey",
        href: "#",
      },
      {
        title: "Meet the Team",
        description: "Get to know our experienced financial advisors",
        href: "#",
      },
      {
        title: "Partnerships",
        description: "Our strategic partners and collaborations",
        href: "#",
      },
    ],
    Services: [
      {
        title: "Personal Finance",
        description: "IUL, Tax-Free Retirement, Mortgage Payoff",
        href: "#",
      },
      {
        title: "Business Solutions",
        description: "Retirement Solutions, Estate Planning",
        href: "#",
      },
    ],
    Resources: [
      {
        title: "Webinars & Events",
        description: "Join our educational sessions and workshops",
        href: "webinars-and-events",
      },
      {
        title: "Blog & Financial Education",
        description: "Stay informed with our latest insights",
        href: "#",
      },
      {
        title: "Books & eBooks",
        description: "In-depth resources for financial growth",
        href: "#",
      },
    ],
    "Success Stories": [
      {
        title: "Client Testimonials",
        description: "Hear from our satisfied clients",
        href: "#",
      },
      {
        title: "Case Studies",
        description: "Real success stories and financial transformations",
        href: "#",
      },
    ],
    Contact: [
      {
        title: "Contact Form & Office Details",
        description: "Get in touch with our team",
        href: "#",
      },
      {
        title: "Live Chat & Social Links",
        description: "Connect with us on various platforms",
        href: "#",
      },
      {
        title: "Schedule a Consultation",
        description: "Book your free financial consultation",
        href: "#",
      },
    ],
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-0" variant="ghost">
          <Menu className="!size-8 text-secondary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-96 overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">
            <Link to="#" className="text-2xl font-bold">
              <span className="text-secondary">WEALTHY</span>DEBT
            </Link>
          </SheetTitle>
        </SheetHeader>

        <Accordion type="single" collapsible className="w-full">
          {Object.entries(navItems).map(([section, items]) => (
            <AccordionItem key={section} value={section}>
              <AccordionTrigger className="text-lg">{section}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-4 py-4">
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block space-y-1 hover:bg-accent rounded-md"
                    >
                      <div className="text-base font-medium">{item.title}</div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8">
          <Button className="w-full rounded-full">Join Us!</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
