import "./App.css";
import AutoLogoCarousal from "./components/AutoLogoCarousal";
import Carousal from "./components/Carousal";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Integration from "./components/Integration";
import LastSection from "./components/LastSection";

import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SecondLastSection from "./components/SecondLastSection";
import Testimonials from "./components/Testimonials";
// import FallenStars from "./components/Particles";

function App() {
  return (
    <>
      <div className="bg-black h-full w-full relative  scroll-smooth">
        <Navbar />
        {/* <div className="relative w-full h-screen text-white"> */}
        {/* <FallenStars /> */}
        {/* </div> */}
        <div className="absolute top-0   -z-10 w-full bg-[#030303] ">
          <Head />
          <AutoLogoCarousal />
          <Features />
          <Integration />
          <Pricing />
          <Testimonials />
          <SecondLastSection />
          <LastSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
