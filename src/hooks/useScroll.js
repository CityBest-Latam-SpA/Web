import { useEffect, useMemo, useState } from "react";

export const useScroll = () => {
  const [upNavbar, setUpNavbar] = useState(false);
  const navbarMemo = useMemo(() => upNavbar, [upNavbar]);

  useEffect(() => {
    const evento = window.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) setUpNavbar(true);
      else setUpNavbar(false);
    });

    return () => {
      window.removeEventListener("scroll", evento);
    };
  }, []);

  return { navbarMemo };
};

export const detectScreen = (startWidth, data) => {
  const [dataInfo, setDataInfo] = useState(data);
  const [screen, setScreen] = useState(startWidth);
  const width = useMemo(() => screen, [screen]);

  useEffect(() => {
    const eventScreen = window.addEventListener("resize", (e) => {
      const width = window.innerWidth;
      if (width > 1220) {
        setScreen(5);
        setDataInfo(data?.slice(0, 5));
      } else if (width > 960) {
        setScreen(4);
        setDataInfo(data?.slice(0, 4));
      } else if (width > 780) {
        setScreen(3);
        setDataInfo(data?.slice(0, 3));
      } else if (width > 570) {
        setScreen(2);
        setDataInfo(data?.slice(0, 2));
      } else {
        setScreen(1);
        setDataInfo(data?.slice(0, 1));
      }
    });

    if (startWidth > 1220) setScreen(5);
    else if (startWidth > 960) setScreen(4);
    else if (startWidth > 780) setScreen(3);
    else if (startWidth > 570) setScreen(2);
    else setScreen(1);

    return () => {
      window.removeEventListener("resize", eventScreen);
    };
  }, []);

  return { width, dataInfo, setDataInfo };
};

export const initialWidth = (startWidth) => {
  const [screen, setScreen] = useState(startWidth);
  const firstWidth = useMemo(() => screen, [screen]);

  useEffect(() => {
    if (screen > 1220) setScreen(5);
    else if (screen > 960) setScreen(4);
    else if (screen > 780) setScreen(3);
    else if (screen > 570) setScreen(2);
    else setScreen(1);
  }, []);

  return { firstWidth };
};

export const detectImage = (currentWidth) => {
  const [responsiveImg, setResponsiveImg] = useState(
    currentWidth < 700 ? false : true
  );
  const memoImg = useMemo(() => responsiveImg, [responsiveImg]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700 || !responsiveImg) setResponsiveImg(false);
      else setResponsiveImg(true);
    });
  }, []);

  return { memoImg };
};
