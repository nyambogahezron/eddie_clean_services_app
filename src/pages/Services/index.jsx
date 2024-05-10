import PageTitle from "../../components/PageTitle";
import ServicesInfo from "../../components/ServicesInfo";

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='section-title'>
        <PageTitle text='Our Services' />
      </div>
      <ServicesInfo />
    </section>
  );
};

export default Services;
