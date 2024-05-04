import { FaStar, FaMagic, FaHeart } from "react-icons/fa";
const HeroBottom = () => {
  return (
    <div className='wrapper'>
      <div className='box'>
        <div className='icon'>
          <FaStar />
        </div>
        <span>Keep it clean</span>
      </div>
      <div className='box'>
        <div className='icon'>
          <FaHeart />
        </div>
        <span>elevated clean living</span>
      </div>
      <div className='box'>
        <div className='icon'>
          <FaMagic />
        </div>
        <span>keep it fresh</span>
      </div>
    </div>
  );
};

export default HeroBottom;
