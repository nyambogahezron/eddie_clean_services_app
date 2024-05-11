import ServicesInfo from "../../components/ServicesInfo";
import SinglePageNav from "../../components/singlePageNav";

const Services = () => {
  return (
    <section className='services' id='services'>
     <SinglePageNav title='Our Services' />
      <ServicesInfo />
    </section>
  );
};

export default Services;
