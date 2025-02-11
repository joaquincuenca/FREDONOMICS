import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { IconType } from "react-icons";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Personal Finance", href: "#" },
      { label: "Business Solutions", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Webinars & Events", href: "#" },
      { label: "Blog & Financial Education", href: "#" },
      { label: "Books & eBooks", href: "#" },
    ],
  },
  {
    title: "Success Stories",
    links: [
      { label: "Client Testimonials", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Form & Office Details", href: "#" },
      { label: "Schedule a Consultation", href: "#" },
      { label: "Live Chat and Social Links", href: "#" },
    ],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

const FooterSection = ({ title, links }: FooterSection) => (
  <div className="flex flex-col gap-2">
    <h2 className="mb-1 opacity-60 uppercase">{title}</h2>
    {links.map((link) => (
      <Link key={link.label} to={link.href}>
        {link.label}
      </Link>
    ))}
  </div>
);

const SocialButton = ({ icon: Icon, href, label }: SocialLink) => (
  <Button
    asChild
    variant="outline"
    size="icon"
    className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60 hover:bg-secondary"
    aria-label={label}
  >
    <a href={href}>
      <Icon className="size-8" />
    </a>
  </Button>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary p-8 w-full">
      <div className="grid gap-8 lg:grid-cols-[0.5fr_1fr]">
        {/* Brand Section */}
        <div className="space-y-1">
          <h1 className="font-bold text-lg">WealthyDebt</h1>
          <p className="text-sm w-2/3">
            We Empower Your Finances, You Prosper for Generations.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-4 gap-6 text-sm">
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        <Separator className="lg:col-span-2 bg-black opacity-60" />
      </div>

      {/* Bottom Section */}
      <div className="flex md:flex-row flex-col items-center justify-between mt-8 gap-4 md:gap-8">
        <p className="font-medium text-xs opacity-60">
          © {currentYear} WealthyDebt. All rights reserved
        </p>
        <div className="flex items-center gap-2 justify-self-end">
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.label} {...social} />
          ))}
        </div>
      </div>
    </footer>
  );
}
