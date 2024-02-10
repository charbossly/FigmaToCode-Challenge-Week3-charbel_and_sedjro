import React from "react";
import images from "../../../../constants/images";

export default function socials() {
  const socialsList = [
    {
      image: images.Instagram,
      image2: images.InstagramO,
    },
    {
      image: images.Twitter,
      image2: images.TwitterO,
    },
    {
      image: images.Facebook,
      image2: images.FacebookO,
    },
  ];
  return (
    <div className="flex justify-center items-center gap-x-4">
      {socialsList.map((elt) => {
        return (
          <>
            <a
              href="#"
              className="hidden lg:block hover:scale-150 transition-all duration-200 ease-in"
            >
              <img src={elt.image} alt="" />
            </a>
            <a href="#" className="block lg:hidden">
              <img src={elt.image2} alt="" />
            </a>
          </>
        );
      })}
    </div>
  );
}
