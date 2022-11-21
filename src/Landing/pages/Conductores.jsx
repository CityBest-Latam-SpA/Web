import { SliderConductores } from "../components/Conductores/SliderConductores";
import { Viaja1 } from "../components/Conductores/Viaja1";
import { Viaja2 } from "../components/Conductores/Viaja2";
import { Viaja3 } from "../components/Conductores/Viaja3";
import { Footer } from "../components/Footer";

import { Layout } from "../layouts/Layout";

export const Conductores = () => {
  return (
    <>
      <SliderConductores />
      <Layout>
        <Viaja1 />
        <Viaja2 />
        {/* <Viaja3 /> */}
        <Footer />
      </Layout>
    </>
  );
};
