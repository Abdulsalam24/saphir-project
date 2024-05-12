import Image from "next/image";
import React from "react";
import kwaraMap from "svgs/icons/kwara-map.svg";
import starList from "svgs/icons/star-list.svg";

const JoinWaitlist = () => {
  const waitlist = [
    {
      text: "Exclusive updates about our launch",
    },

    {
      text: "Early access to reservations",
    },

    {
      text: "Special invitations to pre-opening events",
    },
  ];
  return (
    <section className="pb-[100px]" id="joinWaitlist">
      <div className="flex flex-col max-w-[780px] mx-auto gap-5 items-center">
        <div className="flex flex-col items-center text-center">
          <Image src={kwaraMap} alt="kwaraMap" />
          <h2 className="mt-10 text-white font-bold">
            Don&apos;t miss out on the grand unveiling of Saphir. Sign up for
            our waitlist today to secure your spot at one of our first tables.
            Members of our waitlist will receive:
          </h2>
        </div>
        <ul className="flex  flex-col items-center gap-2">
          {waitlist.map((list, index: number) => (
            <li className="flex gap-2 items-center" key={index}>
              <Image src={starList} alt="starList" width={20} height={20} />
              <span className="text-white">{list.text}</span>
            </li>
          ))}
        </ul>
        <div className="gap-1 md:gap-0 flex max-w-[610px] justify-start md:justify-center flex-wrap w-full mt-2">
          <input className="flex-1" type="text" placeholder="Name" />
          <input className="flex-1" type="email" placeholder="Email" />
          <button className="btn">Join Waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
