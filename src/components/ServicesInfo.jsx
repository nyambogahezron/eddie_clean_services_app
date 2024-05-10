import { useState } from "react";
import { Link } from "react-router-dom";
import {servicesItems} from './data'

const ServicesInfo = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);

  const filteredServices = servicesItems.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())
  );

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  return (
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
        {currentServices.length > 0 ? (
          currentServices.map((item) => {
            const { id, title, description, img } = item;
            return (
              <div key={id} className='item'>
                <Link to='services' className='thumbnail'>
                  <img src={img} alt={title} />
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
      {/* pagination  */}
      <div className='pagination'>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M4.83578 12L11.0429 18.2071L12.4571 16.7929L7.66421 12L12.4571 7.20712L11.0429 5.79291L4.83578 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z'></path>
          </svg>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-no ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`next ${currentPage === totalPages ? "disabled" : ""}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z'></path>
          </svg>
        </button>

        <p>
          Page {currentPage}/{totalPages}
        </p>
      </div>
    </div>
  );
};

export default ServicesInfo;
