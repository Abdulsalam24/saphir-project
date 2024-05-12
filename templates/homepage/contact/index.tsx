import Image from "next/image";
import React from "react";

import twitter from "svgs/icons/twitter-logo.svg"
import instagram from "svgs/icons/instagram-logo.svg";
import tiktok from "svgs/icons/tiktok-logo.svg";
import facebook from "svgs/icons/facebook-logo.svg";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="pt-24 pb-[120px] text-center flex items-center flex-col gap-12 max-w-[760px] mx-auto"
    >
      <h4 className="text-[22px] text-white">
        Stay connected and be the first to hear about exciting updates and sneak
        peeks of what we are preparing for you at Saphir. Follow us on
      </h4>
      <div className="flex gap-1 items-center">
        <Image src={twitter} alt="twitter" />
        <Image src={instagram} alt="instagram" />
        <Image src={tiktok} alt="tiktok" />
        <Image src={facebook} alt="facebook" />
      </div>
    </footer>
  );
};

export default Contact;
