import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className='social-media-icons'>
      <h1>follow us on social media</h1>
      <div className='wrapper'>
        <div className='button'>
          <div className='icon'>
            <FaFacebook />
          </div>
          <span>Facebook</span>
        </div>
        <div className='button'>
          <div className='icon'>
            <FaTwitter />
          </div>
          <span>Twitter</span>
        </div>
        <div className='button'>
          <div className='icon'>
            <FaInstagram />
          </div>
          <span>Instagram</span>
        </div>
        <div className='button'>
          <div className='icon'>
            <FaTiktok />
          </div>
          <span>TikTok</span>
        </div>
        <div className='button'>
          <div className='icon'>
            <FaYoutube />
          </div>
          <span>YouTube</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
