
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
  { id: 5, path: "#news", name: "News And Events" },
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


const servicesItems = [
  {
    id: 1,
    title: "General and deep cleaning of houses",
    description: "We provide both general and deep cleaning services for your house to keep it sparkling clean.",
    img: '/img-1.jpg'
  },
  {
    id: 2,
    title: "Commercial cleaning",
    description: "We offer cleaning services for commercial spaces to maintain a clean and professional environment.",
    img: '/img-2.jpg'
  },
  {
    id: 3,
    title: "Office cleaning and reorganizing",
    description: "Our team can clean and reorganize your office space for maximum productivity.",
    img: '/img-3.jpg'
  },
  {
    id: 4,
    title: "Kitchen, toilet, bathroom and sinks cleaning",
    description: "We specialize in cleaning kitchens, toilets, bathrooms, and sinks to ensure hygiene and cleanliness.",
    img: '/img-4.jpg'
  },
  {
    id: 5,
    title: "Glass window/door cleaning",
    description: "Our team can clean your glass windows and doors to keep them clear and streak-free.",
    img: '/img-5.jpg'
  },
  {
    id: 6,
    title: "Post construction cleaning",
    description: "We provide post-construction cleaning services to remove debris and make the space ready for use.",
    img: '/img-6.jpg'
  },
  {
    id: 7,
    title: "Tiles and cabro cleaning",
    description: "We offer cleaning services for tiles and cabro to remove dirt and grime.",
    img: '/img-7.jpg'
  },
  {
    id: 8,
    title: "Floor polishing, fumigation and pests control",
    description: "Our services include floor polishing, fumigation, and pest control to keep your space clean and pest-free.",
    img: '/img-8.jpg'
  },
  {
    id: 9,
    title: "Laundry services",
    description: "We offer laundry services for your convenience.",
    img: '/img-9.jpg'
  },
  {
    id: 10,
    title: "Gardening and compound cleaning",
    description: "Our team can maintain your garden and clean your compound to keep it neat and tidy.",
    img: '/img-10.jpg'
  },
  {
    id: 11,
    title: "Air condition servicing",
    description: "We provide air conditioning servicing to ensure your AC units are working efficiently.",
    img: '/img-11.jpg'
  },
  {
    id: 12,
    title: "Interior designing and cleaning",
    description: "Our team can help with interior design and cleaning to create a beautiful and clean space.",
    img: '/img-12.jpg'
  },
  {
    id: 13,
    title: "Trenches, gutters water ways and karabat cleaning",
    description: "We offer cleaning services for trenches, gutters, waterways, and karabat.",
    img: '/img-13.jpg'
  },
  {
    id: 14,
    title: "Opening blocked sewer lines",
    description: "Our team can open blocked sewer lines to prevent backups and flooding.",
    img: '/img-14.jpg'
  },
  {
    id: 15,
    title: "After party/celebration cleaning",
    description: "We provide cleaning services after parties or celebrations to clean up the mess.",
    img: '/img-15.jpg'
  },
 
  {
    id: 16,
    title: "Moving services",
    description: "Our team can help with moving services to make your move easier and stress-free.",
    img: '/img-16.jpg'
  }
];

  const countryDetails = {
    kenya: {
      address: "Birendranagar 06, Kenya",
      phone: ["+0098 9893 5647", "+0096 3434 5678"],
      email: ["codinglab@gmail.com", "info.codinglab@gmail.com"],
    },
    uganda: {
      address: "Birendranagar 06, Uganda",
      phone: ["+0098 9893 5647", "+0096 3434 5678"],
      email: ["codinglab@gmail.com", "info.codinglab@gmail.com"],
    },
    tanzania: {
      address: "Birendranagar 06, Tanzania",
      phone: ["+0098 9893 5647", "+0096 3434 5678"],
      email: ["codinglab@gmail.com", "info.codinglab@gmail.com"],
    },
  };


const testimonials = [
  {
    id: 1,
    text: "Eddie Clean Services exceeded my expectations! Their attention to detail and dedication to cleanliness is unmatched. I highly recommend their services.",
    name: "Alex Smith",
    stars: 5,
    image: "images/profile-1.jpeg",
  },
  {
    id: 2,
    text: "I've been using Eddie Clean Services for years now, and I'm consistently impressed by their professionalism and thoroughness. They truly go above and beyond.",
    name: "Steven Chris",
    stars: 5,
    image: "images/profile-2.jpeg",
  },
  {
    id: 3,
    text: "Eddie Clean Services has made my life so much easier! Their team is reliable, efficient, and always leaves my home sparkling clean. Thank you!",
    name: "Kristina Bellis",
    stars: 5,
    image: "images/profile-3.jpeg",
  },
  {
    id: 4,
    text: "I can't say enough good things about Eddie Clean Services. From their friendly staff to their impeccable service, they're simply the best in the business.",
    name: "John Doe",
    stars: 5,
    image: "images/profile-4.jpeg",
  },
  {
    id: 5,
    text: "Eddie Clean Services is the only cleaning service I trust with my home. They consistently deliver outstanding results, and their attention to detail is remarkable.",
    name: "Jane Doe",
    stars: 5,
    image: "images/profile-5.jpeg",
  },
  {
    id: 6,
    text: "Choosing Eddie Clean Services was one of the best decisions I've made. Their professionalism and dedication to customer satisfaction are truly commendable. Highly recommended!",
    name: "Richard Roe",
    stars: 5,
    image: "images/profile-6.jpeg",
  },
];


export {
  PrimaryLinks,
  exploreLinks,
  legalLinks,
  socialMediaLinks,
  servicesItems,
  countryDetails,
  testimonials
    } 