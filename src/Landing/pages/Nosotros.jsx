import { SliderNosotros } from "../components/Nosotros/SliderNosotros";
import { Viaja1 } from "../components/Nosotros/Viaja1";
import { Viaja2 } from "../components/Nosotros/Viaja2";
import { Viaja3 } from "../components/Nosotros/Viaja3";
import { Footer } from "../components/Footer";
import { Layout } from "../layouts/Layout";

export const Nosotros = () => {
  return (
    <>
      <SliderNosotros />
      <Layout>
        <Viaja1 />
        <Viaja2 />
        {/* <Viaja3 /> */}
        <Footer />
      </Layout>
    </>
  );
};
