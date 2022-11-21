import { Footer } from "../components/Footer";
import { SliderPasajeros } from "../components/Pasajeros/SliderPasajeros";
import { Viaja1 } from "../components/Pasajeros/Viaja1";
import { Viaja2 } from "../components/Pasajeros/Viaja2";
import { Viaja3 } from "../components/Pasajeros/Viaja3";
import { Layout } from "../layouts/Layout";

export const Pasajeros = () => {
  return (
    <>
      <SliderPasajeros />
      <Layout>
        <Viaja1 />
        <Viaja2 />
        {/* <Viaja3 /> */}
        <Footer />
      </Layout>
    </>
  );
};
