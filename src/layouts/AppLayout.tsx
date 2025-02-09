import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen">
      <Navbar />
      <div className="flex-1 px-8 grid">
        <main className="h-full w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
