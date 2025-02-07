import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="pb-6">
      <nav className="grid grid-cols-[auto_1fr_auto] items-center">
        <Link to="#" className="text-2xl font-bold">
          <span className="text-primary">WEALTHY</span>DEBT
        </Link>
        <ul className="flex gap-6 items-center justify-center">
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Resources</Link>
          </li>
          <li>
            <Link to="#">Sucess Stories</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <Button className="justify-self-end text-zinc-900 font-semibold">
          Join Us!
        </Button>
      </nav>
    </div>
  );
}
