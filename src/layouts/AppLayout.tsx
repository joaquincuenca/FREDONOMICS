import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen">
      <div className="flex-1 px-8 py-6 grid">
        <main className="max-w-7xl mx-auto w-full">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
