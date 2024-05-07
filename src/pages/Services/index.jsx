import PageTitle from "../../components/PageTitle";
import ServiceImg from "../../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
import servicesItems from "./data";
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='section-title'>
        <PageTitle text='Our Services' />
      </div>
      <div className='container'>
        <div className='wrapper'>
          {servicesItems.map((item) => {
            const { id, title, description } = item;
            return (
              <div key={id} className='item'>
                <Link to='services' className='thumbnail'>
                  <img src={ServiceImg} alt='author' />
                </Link>
                <div className='text'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
