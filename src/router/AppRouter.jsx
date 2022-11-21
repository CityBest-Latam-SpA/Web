import { Routes, Route, Navigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Nosotros, Conductores, Home, Pasajeros, Prensa } from "../Landing";
import { useScroll } from "../hooks/useScroll";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styles from './styles.module.scss';
import { useLocation } from "../hooks/useLocation";

export const AppRouter = () => {
  const { navbarMemo } = useScroll();
  useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/pasajeros" element={<Pasajeros />} />
        <Route path="/conductores" element={<Conductores />} />
        <Route path="/prensa" element={<Prensa />} />
      </Routes>
      {/* {navbarMemo && (
        <div
          className={styles.buttonUp}
          onClick={() => scroll.scrollToTop({ duration: 0 })}
        >
          <FaArrowAltCircleUp
            className={styles.iconUp}
          />
        </div>
      )} */}
    </>
  );
};
