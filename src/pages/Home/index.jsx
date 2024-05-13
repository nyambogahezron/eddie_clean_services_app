import Navbar from "../../components/Navbar";
import HeroBottom from "./Sections/HeroBottom";
import HeroSection from "./Sections/HeroSection";
import PageTitle from "../../components/PageTitle";
import AboutUsInfo from "../../components/AboutUsInfo";
import ContactUsInfo from "../../components/ContactUsInfo";
import PricingInfo from "../../components/PricingInfo";
import ServicesInfo from "../../components/ServicesInfo";

const Home = () => {
  return (
    <div>
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

        <section id='aboutUs'>
          <PageTitle text='About Us' />
          <AboutUsInfo />
        </section>
        <section className='services' id='services'>
          <div className='section-title'>
            <PageTitle text='Our Services' />
          </div>
          <ServicesInfo />
        </section>
        <section className='pricing' id='pricing'>
          <div>
            <PageTitle text=' our pricing' />
          </div>
          <PricingInfo />
        </section>
        <section className='contact' id='contact'>
          <div>
            <PageTitle text='Contact Us' />
            <ContactUsInfo />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
