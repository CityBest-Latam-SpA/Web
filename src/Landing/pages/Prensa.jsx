import { Footer } from "../components/Footer";
import { SliderPrensa } from "../components/Prensa/SliderPrensa";
// import { Viaja1 } from "../components/Prensa/Viaja1";
// import { Viaja2 } from "../components/Prensa/Viaja2";
import { Viaja3 } from "../components/Prensa/Viaja3";
import { Layout } from "../layouts/Layout";

export const Prensa = () => {
  return (
    <>
      <SliderPrensa />
      <Layout>
        {/* <Viaja3 /> */}
        <Footer />
      </Layout>
    </>
  );
};
