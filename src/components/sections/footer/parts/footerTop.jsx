import React from "react";

export default function footerTop() {
  const links = [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
    {
      title: "Get In Touch",
    },
  ];
  return (
    <>
      {links.map((link, index) => {
        return (
          <>
            <h4>{link.title}</h4>
            <ul className="grid grid-cols-1">
              {index !== links.length - 1 &&
                link.links.map((li, idx) => {
                  return <li>{li}</li>;
                })}
            </ul>
          </>
        );
      })}
    </>
  );
}
