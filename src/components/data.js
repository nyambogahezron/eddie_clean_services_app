

const PrimaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/aboutUs' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contactUS' },
];
const exploreLinks = [
  { id: 1, path: "/blogs", name: "Blogs" },
  { id: 2, path: "/activities", name: "Latest Activities" },
  { id: 3, path: "#galley", name: "Galley" },
  { id: 4, path: "#team", name: "Our Team" },
  { id: 4, path: "#news", name: "News And Events" },
];

const legalLinks = [
  { id: 1, path: "/agreement", name: "Customer Agreement" },
  { id: 2, path: "/privacy", name: "Privacy Policy" },
  { id: 3, path: "/security", name: "Security" },
  { id: 4, path: "#testimonials", name: "Testimonials" },
];

const socialMediaLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: "FaFacebook",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "FaTwitter",
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "FaInstagram",
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "TikTok",
    icon: "FaTiktok",
    link: "https://www.tiktok.com",
  },
  {
    id: 5,
    name: "YouTube",
    icon: "FaYoutube",
    link: "https://www.youtube.com",
  },
];

export default socialMediaLinks;

export {PrimaryLinks, exploreLinks, legalLinks, socialMediaLinks} 