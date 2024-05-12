import Image from "next/image";
import React from "react";
import sahirImg1 from "svgs/icons/sahir1.svg";
import sahirImg2 from "svgs/icons/sahir2.svg";
import sahirImg3 from "svgs/icons/sahir3.svg";

const About = () => {
  return (
    <section className="max-w-[1100px] mx-auto pb-[100px] w-full" id="about">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <video
          className="rounded-2xl object-cover w-full h-full md:col-span-2 md:row-span-3"
          // src={require("../../../public/video/saphir-video-roaming.mp4")}
          src="/video/saphir-video-roaming.mp4"
          autoPlay
          muted
          loop
        />
        <Image
          className="rounded-2xl w-full"
          src={sahirImg1}
          alt="sahirImg1"
          width={398}
          height={224}
        />
        <Image
          className="rounded-2xl  w-full"
          src={sahirImg2}
          alt="sahirImg2"
          width={398}
          height={224}
        />
        <Image
          className="rounded-2xl  w-full"
          src={sahirImg3}
          alt="sahirImg3"
          width={398}
          height={224}
        />
      </div>
    </section>
  );
};

export default About;
