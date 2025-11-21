import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/Services";
import PageDivider from "../components/PD";
import Article from "../components/Article";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQs";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="w-full h-full bg-[#d8f4ff] overflow-hidden">
      <div>
        <div className="w-full h-screen ">
          <HeroSection />
          <About />
        </div>
      </div>
      mx
      <div className="md:mx-10 mx-5">
        <Service />
      </div>
      <PageDivider />
      <div className="md:mx-10">
        <Article />
        <Testimonials />
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
