"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
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
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img
          className="object-contain object-[0%_10%] scale-120"
          src={"./tiktok.jpg"}
        />
      </div>
      <div className="inline-flex items-baseline gap-0.5 ">
        Cassie Robin
        <img className="h-4 translate-y-0.5" src={"./icons/verified.png"} />
      </div>
    </nav>
  );
}
