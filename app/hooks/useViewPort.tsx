"use client";

import { useEffect, useState } from "react";
/** custom hook to alway check if browser window view port has been resized */

const useViewPort = () => {
  const [currentViewPortWidth, setCurrentViewPortWidth] = useState(0);
  const [currentViewPortHeight, setCurrentViewPortHeight] = useState(0);

  //Resloves nextjs ssr issue
  useEffect(() => {
    setCurrentViewPortWidth(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
    setCurrentViewPortHeight(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
    );
  }, []);

  function viewPortCheck() {
    const viewPortChecker = setInterval(() => {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      if (vw !== currentViewPortWidth || vh !== currentViewPortHeight) {
        setCurrentViewPortWidth(vw);
        setCurrentViewPortHeight(vh);
      }
    }, 300);

    return viewPortChecker;
  }

  useEffect(() => {
    const check = viewPortCheck();

    return () => clearInterval(check);
  });

  return { currentViewPortHeight, currentViewPortWidth };
};

export default useViewPort;
