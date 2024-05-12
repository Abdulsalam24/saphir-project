import React from "react";
import Hero from "./hero";
import JoinWaitlist from "./joinWaitlist";
import About from "./about";
import Footer from "./contact";

const Homepage = () => {
  return (
    <section>
      <Hero />
      <div className="px-5 max-w-[1220px] mx-auto">
        <JoinWaitlist />
        <About />
        <Footer />
      </div>
    </section>
  );
};

export default Homepage;
