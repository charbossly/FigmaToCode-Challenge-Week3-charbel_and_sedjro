import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";

export default function Root() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
