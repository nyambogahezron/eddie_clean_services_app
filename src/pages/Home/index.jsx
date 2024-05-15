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
          {/* curve shape */}
          <div className='custom-shape-divider-top-1715737662'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
          <AboutUsInfo />
        </section>
        <section className='services' id='services'>
          <div className='custom-shape-divider-top-1715812006'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
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
