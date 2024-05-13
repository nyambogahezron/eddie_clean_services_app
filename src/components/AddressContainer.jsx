import { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { countryDetails } from "./data.js";

const AddressContainer = () => {
  const [activeTab, setActiveTab] = useState("kenya");

  return (
    <div className='left-side'>
      <div className='tabs'>
        {Object.keys(countryDetails).map((country) => (
          <div
            key={country}
            className={activeTab === country ? "active" : ""}
            onClick={() => setActiveTab(country)}
          >
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </div>
        ))}
      </div>
      {countryDetails[activeTab] && (
        <>
          <div className='details'>
            <div className='icon'>
              <FaLocationDot />
            </div>
            <div className='info'>
              <div className='topic'>Address</div>
              <div>{countryDetails[activeTab].address}</div>
            </div>
          </div>
          <div className='details'>
            <div className='icon'>
              <FaPhone />
            </div>
            <div className='info'>
              <div className='topic'>Phone</div>
              {countryDetails[activeTab].phone.map((number, index) => (
                <div key={index} className={`text-${index + 1}`}>
                  {number}
                </div>
              ))}
            </div>
          </div>
          <div className='details'>
            <div className='icon'>
              <FaEnvelope />
            </div>
            <div className='info'>
              <div className='topic'>Email</div>
              {countryDetails[activeTab].email.map((email, index) => (
                <div key={index} className={`text-${index + 1}`}>
                  {email}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressContainer;
