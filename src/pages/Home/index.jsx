import Navbar from "../../components/Navbar";
import HeroSection from "./Sections/HeroSection";
const Home = () => {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <div>
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
