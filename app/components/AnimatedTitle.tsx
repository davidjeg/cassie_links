"use client";

import { useEffect } from "react";

export default function AnimatedTitle() {
  useEffect(() => {
    const title = "@cassierbn";
    let index = 1;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const animate = () => {
      document.title = title.substring(0, index);

      if (!deleting) {
        index++;

        if (index > title.length) {
          deleting = true;
          timeout = setTimeout(animate, 1000);
          return;
        }
      } else {
        index--;

        if (index <= 1) {
          index = 1;
          deleting = false;
        }
      }

      timeout = setTimeout(animate, 100);
    };

    animate();

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
