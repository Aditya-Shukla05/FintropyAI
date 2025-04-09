import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    setIsMobile(window.innerWidth < breakpoint);

    // Add window resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}