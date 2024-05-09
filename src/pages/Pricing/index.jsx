import { FaCheck, FaTimes } from "react-icons/fa";
import { pricingTables } from "../../data";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className='container'>
      <div>
        <PageTitle text=' our pricing' />
      </div>
      <div className='pricing'>
        <div className='wrapper'>
          {pricingTables.map((table) => (
            <div className={`table ${table.type}`} key={table.id}>
              <div className='price-section'>
                <div className='price-area'>
                  <div className='inner-area'>
                    <span className='text'>$</span>
                    <span className='price'>{table.price}</span>
                  </div>
                </div>
              </div>
              <div className='package-name'>{table.type}</div>
              <ul className='features'>
                {table.features.map((feature, index) => (
                  <li key={index}>
                    <span className='list-name'>{feature.name}</span>
                    <span
                      className={`icon ${feature.included ? "check" : "cross"}`}
                    >
                      {feature.included ? <FaCheck /> : <FaTimes />}
                    </span>
                  </li>
                ))}
              </ul>
              <div className='btn'>
                <button>
                  <Link to='/contactUS'>Purchase</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
