"use client";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex flex-col gap-5 justify-center pt-[113px] items-center">
        <h2 className="text-white">Oops, nothing to see here</h2>
        <Link href="/">
          <button className="btn">Take me back</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
