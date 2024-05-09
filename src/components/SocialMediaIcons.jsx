import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialMediaLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "TikTok",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com",
  },
  {
    id: 5,
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com",
  },
];
const SocialMediaIcons = () => {
  return (
    <div className='social-media-icons'>
      <h1>follow us on social media</h1>
      <div className='wrapper'>
        {socialMediaLinks.map((platform) => (
          <div className='button' key={platform.id}>
            <div className='icon'>{platform.icon}</div>
            <span>
              <a href={platform.link} target="_blank" rel="noopener noreferrer">{platform.name}</a>
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
