import Navbar from "../../components/Navbar";
import HeroBottom from "./Sections/HeroBottom";
import HeroSection from "./Sections/HeroSection";
const Home = () => {
  return (
    <section className='home' id='home'>
      <header className='header'>
        <Navbar />
      </header>
      <main>
        <div>
          <HeroSection />
        </div>
        <div className='hero-panel'>
          <HeroBottom />
        </div>
      </main>
    </section>
  );
};

export default Home;
