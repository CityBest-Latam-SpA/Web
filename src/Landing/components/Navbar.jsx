import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import styles from "./Navbar.module.scss";
import logoCityBest from "../../assets/img/logocitibest.png";
import flecha from "../../assets/img/partners/flecha.png";
import mp from "../../assets/img/partners/MERCADOPAGO.png";
import smartphone from "../../assets/img/partners/honorcell.png";
import honorlogo from "../../assets/img/partners/honor_logo.png";
import jaclogo from "../../assets/img/partners/jaclogo.png";
import electronlogo from "../../assets/img/electron-logo.svg";
import ayudaconductor from "../../assets/img/AYUDAALCONDUCTOR.png";
import atencioncliente from "../../assets/img/ATENCIONALCLIENTE.png";
import iconpaises from "../../assets/img/ICONOPAISES.png";
import Colombia from "../../assets/img/paises/Colombia.png";
import Uruguay from "../../assets/img/paises/Uruguay.png";
import Chile from "../../assets/img/paises/Chile.png";
import Mexico from "../../assets/img/paises/Mexico.png";
import { useMenuPaises } from "./useMenuPaises";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../../helpers/countries";
import { useFlags } from "../../hooks/useFlags";
import { initialCountry } from "../../store";
import payulogo from "../../assets/img/partners/payulogo.png";
import mglogo from "../../assets/img/partners/mglogo.png";
import bydlogo from "../../assets/img/partners/bydlogo.png";

export const Navbar = ({ navbarMemo }) => {
  const dispatch = useDispatch();
  const { currentCountry } = useSelector((state) => state.landing);
  const [isOpen, setOpen] = useState(false);
  const [viewPaises, setViewPaises] = useState(false);
  const { currentFlagMemo: currentFlag } = useFlags(currentCountry);
  const { menuPaises, useLeft } = useMenuPaises(
    viewPaises,
    setViewPaises,
    navbarMemo,
    setOpen,
    currentFlag
  );  

  const onChangePaises = () => {
    setViewPaises(!viewPaises);
  };

  const changeCountry = (name) => {
    const data = countries.find((country) => country.country_name === name);
    dispatch(initialCountry(data));
  };

  return (
    <nav
      className={`${styles.containerNavbar}`}
      style={
        navbarMemo
          ? { display: "none" }
          : { position: "fixed", top: "0px", opacity: 1 }
      }
    >
      <section className={styles.firstSection}>
        <div className={styles.logoCitybest}>
          <figure>
            <Link to="/">
              <img src={logoCityBest} alt="citybest" />
            </Link>
          </figure>
        </div>
        {/*<div
          className={styles.mp}          
        >
          <figure>
            <img
              className={styles.img}
              width={"12px"}
              src={flecha}
              alt="flecha"
            />
          </figure>
          <span>Sistema de pago</span>
          <figure style={{ marginRight: "1rem" }}>
            <a href="https://www.mercadopago.com.mx/" target="_blank">
              <img width={"95px"} src={mp} alt="mp" />
            </a>
          </figure>
        </div>*/}
        {/* <div className={styles.fpay}>
          <figure>
            <img src={fpay} width={"60px"} alt="" />
          </figure>
        </div> */}
        <div className={styles.payulogo}>
          <span></span>
          <figure>
            <a href="https://peru.payu.com" target="_blank">
              <img src={payulogo} width={"58px"} alt="" />
            </a>
          </figure>
        </div>
        <div className={styles.mglogo}>
          <span></span>
          <figure>
            <a href="https://mgmotor.pe" target="_blank">
              <img src={mglogo} width={"58px"} alt="" />
            </a>
          </figure>
        </div>
        <div className={styles.bydlogo}>
          <span></span>
          <figure>
            <a href="https://www.byd.com.pe" target="_blank">
              <img src={bydlogo} width={"58px"} alt="" />
            </a>
          </figure>
        </div>
        {/*<div className={styles.honor}>
          <figure className={styles.smartphoneImage}>
            <img src={smartphone} width={"14px"} alt="" />
          </figure>
          <span>Smartphone</span>
          <figure>
            <a href="https://www.hihonor.com/mx/" target="_blank">
              <img src={honorlogo} width={"58px"} alt="" />
            </a>
          </figure>
        </div>*/}
        {/*<div className={styles.vehiculoElectrico}>
          <figure className={styles.vehiculoImage}>
            <img
              className={styles.img}
              width={"12px"}
              src={flecha}
              alt="flecha"
            />
          </figure>
          <span>Vehículo eléctrico</span>
        </div>
        <div className={styles.jac}>
          <figure>
            <a href="https://jac.mx/" target="_blank">
              <img
                className={styles.img}
                width={"43px"}
                src={jaclogo}
                alt="jac"
              />
            </a>
          </figure>
        </div>*/}
        {/*<div className={styles.electron}>
          <figure>
            <a href="https://electronmotors.pe/" target="_blank">
              <img
                className={styles.img}
                width={"68px"}
                src={electronlogo}
                alt="electron"
              />
            </a>
          </figure>
      </div>*/}
      </section>
      <section
        className={styles.secondSection}
        style={isOpen ? { left: 0 } : { left: "-100%" }}
      >
        <div className={styles.imgLogoCityBest}>
          <figure>
            <Link to="/">
              <img
                src={logoCityBest}
                alt=""                
              />
            </Link>
          </figure>
        </div>

        <div className={styles.help}>
          <figure>
            <img src={ayudaconductor} width={"20px"} alt="" />
          </figure>
          <span
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=56994179310&text=Necesito%20informaci%C3%B3n",
                "_blank"
              );
            }}
          >
            Ayuda al conductor
          </span>
        </div>
        <div className={styles.atention}>
          <figure>
            <img src={atencioncliente} width={"20px"} alt="" />
          </figure>
          <span>Atención al cliente</span>
        </div>
        <div
          className={styles.countries}
          onClick={onChangePaises}          
        >
          {currentFlag ? (
            <span style={{ width: "3.5rem" }}>
              {currentCountry.country_name}
            </span>
          ) : (
            <figure>
              <img src={iconpaises} width={"20px"} alt="" />
            </figure>
          )}
          <span className={`${styles.selectPaises} selectPaises`}>
            <span style={{ width: "2rem" }}>
              {currentFlag ? (
                <img
                  src={currentFlag}
                  width={
                    currentFlag.includes("Uruguay") ||
                    currentFlag.includes("Mexico")
                      ? "28px"
                      : "25px"
                  }
                />
              ) : (
                "Países"
              )}
            </span>
            {viewPaises && (
              <div
                className={`${styles.menuSelectPaises} menuSelectPaises`}
                style={{ left: useLeft }}
              >
                <div onClick={() => changeCountry("Colombia")} name="Colombia">
                  <figure>
                    <img
                      src={Colombia}
                      alt=""
                      width="25px"
                      style={{ margin: "0px" }}
                    />
                  </figure>
                  {/* <span>Colombia</span> */}
                </div>
                <div onClick={() => changeCountry("Chile")} name="Chile">
                  <figure>
                    <img
                      src={Chile}
                      alt=""
                      width="25px"
                      style={{ margin: "0px" }}
                    />
                  </figure>
                  {/* <span>Chile</span> */}
                </div>
                <div onClick={() => changeCountry("Uruguay")} name="Uruguay">
                  <figure>
                    <img
                      className="imgUru"
                      src={Uruguay}
                      alt=""
                      width="27px"
                      style={{ margin: "0px" }}
                    />
                  </figure>
                  {/* <span>Uruguay</span> */}
                </div>
                <div onClick={() => changeCountry("Mexico")} name="Mexico">
                  <figure>
                    <img
                      className="imgMex"
                      src={Mexico}
                      alt=""
                      width="27px"
                      style={{ margin: "0px" }}
                    />
                  </figure>
                  {/* <span>Mexico</span> */}
                </div>
              </div>
            )}
          </span>
        </div>
        {/* <div className={styles.imgBanner}>
          <figure>
            <img src={banner3} alt="" />
          </figure>
        </div> */}
      </section>

      <div
        className={styles.hamburguer}        
      >
        <Hamburger
          direction="right"
          color="white"
          duration={0.01}
          toggled={isOpen}
          toggle={setOpen}
        />
        {/* <section
          className={styles.secondSectionHamburguer}
          style={isOpen ? { display: "flex" } : { display: "none" }}
        >
          <div className={styles.help}>
            <figure>
              <img
                style={{ marginTop: "12px" }}
                src={ayudaconductor}
                width={"20px"}
                alt=""
              />
            </figure>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=56994179310&text=Necesito%20informaci%C3%B3n",
                  "_blank"
                );
              }}
            >
              AYUDA AL CONDUCTOR
            </span>
          </div>
          <div className={styles.atention}>
            <figure>
              <img
                style={{ marginTop: "12px" }}
                src={atencioncliente}
                width={"20px"}
                alt=""
              />
            </figure>
            <span>ATENCIÓN AL CLIENTE</span>
          </div>
          <div className={styles.countries}>
            <figure>
              <img
                style={{ marginTop: "12px" }}
                src={iconpaises}
                width={"20px"}
                alt=""
              />
            </figure>
            <span className={styles.selectPaises}>PAÍSES</span>
          </div>
        </section> */}
      </div>
    </nav>
  );
};
