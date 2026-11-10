"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      let newOpacity = scrollY / maxScroll;
      console.log(newOpacity);

      if (newOpacity > 1) newOpacity = 1;
      if (newOpacity < 0) newOpacity = 0;

      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      style={{ opacity }}
      className="fixed flex items-center gap-2 px-4  z-20 w-full max-w-xl h-12 top-0
       duration-100 transition-opacity bg-zinc-900 text-zinc-200 font-semibold"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden relative">
        <Image
          src={"/avatar.jpg"}
          fill
          alt="cassie avatar"
          className="object-cover object-[0%_20%] scale-120"
        />
      </div>
      <div className="inline-flex items-baseline gap-0.5 ">
        Cassie
        <Image
          alt="verified-icon"
          width={18}
          height={18}
          className=" translate-y-0.5"
          src={"/icons/verified.png"}
        />
      </div>
    </nav>
  );
}
