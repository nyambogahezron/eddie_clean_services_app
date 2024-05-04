import Navbar from "../../components/Navbar";
import HeroBottom from "./Sections/HeroBottom";
import HeroSection from "./Sections/HeroSection";
const Home = () => {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main>
        <section className='home' id='home'>
          <div>
            <HeroSection />
          </div>
          <div className='hero-panel'>
            <HeroBottom />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
