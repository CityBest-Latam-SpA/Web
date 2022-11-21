import { useScroll } from "../../hooks/useScroll";
import { Navbar, SubNavbar } from "../";

export const Layout = ({ children }) => {
  const { navbarMemo } = useScroll();

  return (
    <>
      <Navbar navbarMemo={navbarMemo} style={{ zIndex: "99" }} />
      <SubNavbar navbarMemo={navbarMemo} />
      {children}
    </>
  );
};
