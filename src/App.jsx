import "../style.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import Login from "./pages/Login";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./componenets/Layout";
import HostLayout from "./componenets/HostLayout";
import AuthRequired from "./componenets/AuthRequired";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanDetail from "./pages/host/HostVanDetail";
import NotFound from "./pages/NotFound";

import "../server";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/login" element={<Login />} />
            <Route element={<AuthRequired />}>
              <Route path="/host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
