import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-primary p-8 w-full ">
      <div className="grid gap-8 lg:grid-cols-[0.5fr_1fr]">
        <div className="space-y-1">
          <h1 className="font-bold text-lg">WealthyDebt</h1>
          <p className="text-sm w-2/3">
            We Empower Your Finances, You Prosper for Generations.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 text-sm">
          <div className="flex flex-col gap-2">
            <h2 className="mb-1 opacity-60 uppercase">Services</h2>
            <Link to="#">Personal Finance</Link>
            <Link to="#">Business Solutions</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-1 opacity-60 uppercase">Resources</h2>
            <Link to="#">Webinars & Events</Link>
            <Link to="#">Blog & Financial Education</Link>
            <Link to="#">Books & eBooks</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-1 opacity-60 uppercase">Success Stories</h2>
            <Link to="#">Client Testimonials</Link>
            <Link to="#">Case Studies</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-1 opacity-60 uppercase">Contact</h2>
            <Link to="#">Contact Form & Office Details</Link>
            <Link to="#">Schedule a Consultation</Link>
            <Link to="#">Live Chat and Social Links</Link>
          </div>
        </div>
        <Separator className="lg:col-span-2 bg-black opacity-60" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mt-8 gap-4 md:gap-8">
        <p className="font-medium text-xs opacity-60">
          &#169; {currentYear} WealthyDebt. ALl rights reserved
        </p>
        <div className="flex items-center gap-2 justify-self-end">
          <Button className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60">
            <FaLinkedinIn className="size-8" />
          </Button>
          <Button className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60">
            <FaFacebookF className="size-8" />
          </Button>
          <Button className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60">
            <FaInstagram className="size-8" />
          </Button>
          <Button className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60">
            <FaXTwitter className="size-8" />
          </Button>
          <Button className="text-black bg-transparent border rounded-full h-fit w-fit p-2 border-black/60">
            <FaTiktok className="size-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
