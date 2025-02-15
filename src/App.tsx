import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import LandingPage from "./pages/LandingPage";
import WebinarsAndEvents from "./pages/WebinarsAndEvents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route element={<AppLayout />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/webinars-and-events" element={<WebinarsAndEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
