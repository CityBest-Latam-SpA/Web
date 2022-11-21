import { useEffect, useState } from "react";
import { useLayoutEffect } from "react";

export const useMenuPaises = (
  viewPaises,
  setViewPaises,
  navbarMemo,
  setOpen,
  currentFlag
) => {
  const [menuPaises, setMenuPaises] = useState(null);
  const [useLeft, setUseLeft] = useState();

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setViewPaises(false);
      const menuSelectPaises = document.querySelector(".menuSelectPaises");
      if (window.innerWidth < 1223) {
        setViewPaises(false);
      } else {
        setOpen(false);
      }

      // if (window.innerWidth < 1223 && viewPaises && currentFlag) {
      //   setUseWidth("47%");
      // } else if (window.innerWidth < 1223 && (!viewPaises || currentFlag)) {
      //   setUseWidth("47%");
      // } else {
      //   setUseWidth("54.5%");
      // }
    });
  }, []);

  useEffect(() => {
    if (navbarMemo) setViewPaises(false);
  }, [navbarMemo]);

  // useLayoutEffect(() => {
  //   const menuPaises = document.querySelector(".menuSelectPaises");

  //   if (menuPaises) {
  //     if (viewPaises) {
  //       if (window.innerWidth < 1223) {
  //         menuPaises.style.left = "-75px";
  //       } else menuPaises.style.left = "-165px";
  //     }
  //   }
  // }, [viewPaises]);

  useLayoutEffect(() => {
    const menuSelectPaises = document.querySelector(".menuSelectPaises");
    const imgUru = document.querySelector(".imgUru");
    const imgMex = document.querySelector(".imgMex");

    if (menuSelectPaises) {
      if (viewPaises) {
        setMenuPaises({ menuPaises });
        if (window.innerWidth > 1223) {
          setUseLeft("0px");
        } else {
          // si es responsive...
          imgUru.style.width = "40px";
          imgMex.style.width = "40px";
          if (!currentFlag) {
            menuSelectPaises.style.width = "4rem";
            menuSelectPaises.style.backgroundColor = "#441a7b";
            menuSelectPaises.style.border = "none";
            setUseLeft("-10px"); // cuando no esta seleccionado ningun pais (-41px)
          } else {
            menuSelectPaises.style.width = "4rem";
            menuSelectPaises.style.backgroundColor = "#441a7b";
            menuSelectPaises.style.border = "none";
            setUseLeft("-51px"); // cuando no esta seleccionado ningun pais (-41px)
          }
        }
      } else {
        setUseLeft("-75px");
        menuSelectPaises.style.left = "-185px";
      }
    }
  }, [viewPaises]);

  return { menuPaises, useLeft };
};
