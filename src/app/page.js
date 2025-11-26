import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Galerry";
import GetAQuote from "./components/GetAQuote";
import TeamServer from "./components/TeamServer";

export default function Home() {
  return (
    <div>
    <Hero/>
    <About/>
    <Services/>
    <Gallery/>
    <TeamServer /> 
    <GetAQuote/>
     </div>
  );
}
