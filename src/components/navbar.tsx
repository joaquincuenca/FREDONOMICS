import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import MobileNav from "./mobile-nav";
import { AnnouncementBar } from "./announcement-bar";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const isTheirAnAnnouncement = true; // Replace when there's a backend

  return (
    <>
      {isTheirAnAnnouncement && <AnnouncementBar />}
      <div className="py-6 px-8">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center">
          <Link
            to="/home"
            className="text-2xl font-bold inline-flex items-center gap-2"
          >
            <img src="logo.png" alt="Fredonomics Brand Logo" className="w-8" />
            <span>
              <span className="text-secondary">WEALTHY</span>DEBT
            </span>
          </Link>

          <div className="lg:flex hidden justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2 xl:gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[700px] gap-3 p-4">
                      <ListItem href="#" title="Our Story">
                        Company mission + founder's journey
                      </ListItem>
                      <ListItem href="#" title="Meet the Team">
                        Get to know our experienced financial advisors
                      </ListItem>
                      <ListItem href="#" title="Partnerships">
                        Our strategic partners and collaborations
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[700px] gap-3 p-4">
                      <ListItem href="#" title="Personal Finance">
                        IUL, Tax-Free Retirement, Mortgage Payoff
                      </ListItem>
                      <ListItem href="#" title="Business Solutions">
                        Retirement Solutions, Estate Planning
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[700px] gap-3 p-4">
                      <ListItem
                        href="/webinars-and-events"
                        title="Webinars & Events"
                      >
                        Join our educational sessions and workshops
                      </ListItem>
                      <ListItem href="#" title="Blog & Financial Education">
                        Stay informed with our latest insights
                      </ListItem>
                      <ListItem href="#" title="Books & eBooks">
                        In-depth resources for financial growth
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Success Stories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[700px] gap-3 p-4">
                      <ListItem href="#" title="Client Testimonials">
                        Hear from our satisfied clients
                      </ListItem>
                      <ListItem href="#" title="Case Studies">
                        Real success stories and financial transformations
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[700px] gap-3 p-4">
                      <ListItem href="#" title="Contact Form & Office Details">
                        Get in touch with our team
                      </ListItem>
                      <ListItem href="#" title="Live Chat & Social Links">
                        Connect with us on various platforms
                      </ListItem>
                      <ListItem href="#" title="Schedule a Consultation">
                        Book your free financial consultation
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button
            className="justify-self-end text-zinc-900 font-medium rounded-full w-fit h-fit p-2 pr-4 lg:inline-flex hidden"
            variant="outline"
          >
            <Button size="icon" variant="secondary" className="rounded-full">
              <ArrowUpRight />
            </Button>
            Join Us!
          </Button>

          <div className="lg:hidden justify-self-end">
            <MobileNav />
          </div>
        </nav>
      </div>
    </>
  );
}
