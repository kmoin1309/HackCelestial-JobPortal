//import React from 'react';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const MobileComponent = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <p>You are on a mobile device.</p>
      ) : (
        <p>You are on a desktop device.</p>
      )}
    </div>
  );
};

export default MobileComponent;
