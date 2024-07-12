'use client'
import { useEffect, useState } from "react";

const useScroll = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ScrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY)
      
        if ((scrollY < lastScrollY) && scrollY <51) {
          console.log("Hacia Arriba");
          setScrollState(true);
        } else if (scrollY > lastScrollY) {
          setScrollState(false);
          console.log("Hacia Abajo");
        }



      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return ScrollState;
}

export default useScroll;