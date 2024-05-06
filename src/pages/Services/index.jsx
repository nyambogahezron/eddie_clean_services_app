import PageTitle from "../../components/PageTitle";
import ServiveImg from "../../assets/images/bg2.jpg";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='section-title'>
        <PageTitle text='Our Services' />
      </div>
      <div className='container'>
        <div className='wrapper'>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className='item'>
            <Link to='services' className='thumbnail'>
              <img src={ServiveImg} alt='author' />
            </Link>
            <div className='text'>
              <h3>10 Tips to clean your window</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
