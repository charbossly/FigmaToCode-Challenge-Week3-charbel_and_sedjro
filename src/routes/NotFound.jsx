import React from "react";
import images from "../constants/images";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div class="text-center max-w-screen-lg mx-auto flex justify-center flex-col items-center">
        <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
        <div class="animate-bounce">
          <img className="h-96 w-96" src={images.Error} alt="" />
        </div>
        <p class="mt-4 text-gray-600">
          Let's get you back{" "}
          <a href="/" class="text-blue-500">
            home
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
}
