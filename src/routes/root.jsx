import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../components/sections/footer";

export default function Root() {
  let location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
}
