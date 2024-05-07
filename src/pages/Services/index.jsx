import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import ServiceImg from "../../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
import servicesItems from "./data";

const Services = () => {
  const [search, setSearch] = useState("");

  const filteredServices = servicesItems.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='services' id='services'>
      <div className='section-title'>
        <PageTitle text='Our Services' />
      </div>
      <div className='container'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search services...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='wrapper'>
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => {
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
            })
          ) : (
            <p className='no-service'>No services match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
