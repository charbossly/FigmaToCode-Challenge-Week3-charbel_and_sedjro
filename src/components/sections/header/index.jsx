import React from "react";
import ButtonBlue from "../../utils/buttons/button_blue";
import images from "../../../constants/images";
import { useState } from "react";

export default function index() {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const links = [
    {
      title: "Home",
      route: "/",
    },
    { title: "Product", route: "/team" },
    { title: "Pricing", route: "/pricing" },
    { title: "A propos", route: "/about" },
    { title: "Contact", route: "/contact" },
  ];
  return (
    <div className="max-w-screen-lg mx-auto flex bg-lightGrayUi  lg:bg-white flex-col lg:flex-row gap-x-4 items-center p-4 py-8">
      <div className="flex justify-between w-full lg:w-auto items-center">
        <h2 className="text-blackUi font-bold capitalize text-t24">Bandage</h2>
        <div className="flex gap-x-4 items-center lg:hidden">
          <img
            className="cursor-pointer"
            src={images.Search}
            onClick={() => setOpenSearch(!openSearch)}
            alt=""
          />
          <img className="cursor-pointer" src={images.Cart} alt="" />
          <img
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setOpenSearch(false);
            }}
            src={images.Menu}
            alt=""
          />
        </div>
      </div>
      <ul
        className={` ${
          open ? "" : "hidden"
        } py-16 lg:py-0 lg:flex-1 lg:flex lg:justify-start items-center lg:gap-y-0 gap-x-6 lg:ml-12`}
      >
        {links.map((elt, idx) => {
          return (
            <li
              key={idx}
              className="my-6 lg:my-0 text-t28 text-center lg:text-left lg:text-t16 text-grayUi font-medium hover:text-blueUi "
            >
              <a href={elt.route}>{elt.title}</a>{" "}
            </li>
          );
        })}
        <form action="">
          <input
            className={` ${
              openSearch ? "" : "hidden"
            } lg:hidden p-4 bg-grayUi bg-opacity-35 rounded-xl text-white placeholder:text-white border hover:border-blueUi focus:border-blueUi outline-none focus:outline-none`}
            type="text"
            name=""
            placeholder="search"
            id=""
          />
        </form>
      </ul>
      <div className="hidden flex-1 lg:flex items-center justify-end gap-x-8 self-end">
        <a href="" className="text-blueUi">
          Login
        </a>
        <ButtonBlue title="Become a member" icon={true} />
      </div>
    </div>
  );
}
