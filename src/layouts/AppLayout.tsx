import { Outlet } from "react-router-dom";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen">
      <Navbar />
      <div className="flex-1 px-8 grid">
        <main className="h-full w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
