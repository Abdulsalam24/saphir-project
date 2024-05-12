import Nav from "@/components/ui/nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import downArrow from "svgs/icons/chevrons-down.svg";

const Hero = () => {
  return (
    <div className="heroBackground" id="home">
      <Nav />
      <section className="px-5 pt-[100px] pb-[80px] max-w-[810px] mx-auto">
        <div className="flex flex-col gap-14 items-center">
          <div className="text-center mx-auto">
            <button className="btn pointer-events-none">Coming soon</button>
            <h2 className="mt-2 text-white font-bold">
              Welcome to the future of fine dining in the heart of Ilorin.
              Saphir is not just a restaurant; it&apos;s an experience.
            </h2>
          </div>
          <div className="flex flex-col items-center max-w-[700px] mx-auto">
            <p className="text-white">Can’t Wait to vist ?</p>
            <div className="flex gap-1 md:gap-0 justify-start md:justify-center flex-wrap w-full mt-2">
              <input className="flex-1" type="text" placeholder="Name" />
              <input className="flex-1" type="email" placeholder="Email" />
              <button className="btn">Join Waitlist</button>
            </div>
          </div>
        </div>
        <div className="mt-60 w-fit mx-auto ">
          <Link
            href="#joinWaitlist"
            className="animate-pulse flex flex-col items-center"
          >
            <p className="text-white ">Read More</p>
            <Image className="" src={downArrow} alt="downArrow" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
