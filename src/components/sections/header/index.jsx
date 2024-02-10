import React from "react";
import ButtonBlue from "../../utils/buttons/button_blue";

export default function index() {
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
    <div className="max-w-screen-lg mx-auto flex gap-x-4 items-center p-4 py-8">
      <h2 className="text-blackUi font-bold capitalize text-t24">Bandage</h2>
      <ul className="hidden flex-1 lg:flex justify-start items-center gap-x-6 ml-12">
        {links.map((elt, idx) => {
          return (
            <li key={idx} className="text-t16 text-grayUi font-medium">
              <a href={elt.route}>{elt.title}</a>{" "}
            </li>
          );
        })}
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
