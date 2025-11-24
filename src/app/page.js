import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Galerry";
import GetAQuote from "./components/GetAQuote";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Gallery/>
    <GetAQuote/>
     </div>
  );
}
