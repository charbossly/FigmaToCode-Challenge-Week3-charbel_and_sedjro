import React from "react";
import Socials from "../../../utils/grid/parts/socials";
export default function footerTop() {
  const links = [
    {
      title: "Company Info",
      links: [
        {
          name: "About Us",
          li: "/about",
        },
        {
          name: "Carrier",
          li: "carrers",
        },
        {
          name: "We are hiring",
          li: "/wearehiring",
        },
        {
          name: "Blog",
          li: "/",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "About Us",
          li: "/about",
        },
        {
          name: "Carrier",
          li: "carrers",
        },
        {
          name: "We are hiring",
          li: "/wearehiring",
        },
        {
          name: "Blog",
          li: "/",
        },
      ],
    },
    {
      title: "Features",
      links: [
        {
          name: "Business Marketing",
          li: "",
        },
        {
          name: "User Analytic",
          li: "",
        },
        {
          name: "Live Chat",
          li: "",
        },
        {
          name: "Unlimited Support",
          li: "",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "IOS & Android",
          li: "",
        },
        {
          name: "Watch a Demo",
          li: "",
        },
        {
          name: "Customers",
          li: "",
        },
        {
          name: "API",
          li: "",
        },
      ],
    },
    {
      title: "Get In Touch",
    },
  ];
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-16 gap-y-6 px-4 lg:px-4 lg:pr-28 flex flex-col items-start lg:flex-row lg:justify-between">
        <h2 className="text-blackUi font-bold capitalize text-t24  mt-4 lg:mt-0">
          Bandage
        </h2>
        <Socials />
      </div>
      <hr className="max-w-screen-lg mx-auto w-full" />
      <div className="max-w-screen-lg mx-auto lg:grid  p-6 lg:p-4 lg:grid-cols-6 gap-x-4 bg-white m-8">
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className={`${
                index == links.length - 1 ? "col-span-2" : "lg:grid-cols-1"
              }`}
            >
              <h4 className="my-6 font-bold text-blackBlueUi">{link.title}</h4>
              <ul className="text-t14 text-grayUi font-bold">
                {index !== links.length - 1 &&
                  link.links.map((li, idx) => {
                    return (
                      <li
                        key={idx}
                        className="font-normal cursor-pointer my-4 hover:text-blueUi"
                      >
                        <a href={li.li}>{li.name}</a>
                      </li>
                    );
                  })}
                {index == links.length - 1 && (
                  <>
                    <form action="" className="relative flex">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="p-4 rounded-tl-lg rounded-bl-lg focus:outline-none bg-grayUi bg-opacity-20"
                      />
                      <button className="bg-blueUi rounded-tr-lg rounded-br-lg p-4 hover:bg-blackBlueUi text-white text-t18">
                        Suscribe
                      </button>
                    </form>
                    <p className="mt-2 text-t14 text-grayUi font-normal">
                      Lore imp sum dolor Amit
                    </p>
                  </>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
