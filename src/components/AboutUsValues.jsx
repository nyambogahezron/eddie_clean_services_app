const CompanyValues = () => {
  const values = [
    {
      title: "Humble service",
      description:
        "We work to earn our customers’ trust, by solving cleaning problems, and maximize earnings.",
    },
    {
      title: "Continual growth",
      description:
        "We take care of our employees as we improve from our past experiences to provide stable employment with benefits and growth.",
    },
    {
      title: "Responsibility",
      description:
        "We empower our employees to take ownership and solve problems.",
    },
    {
      title: "Integrity",
      description:
        "We do the right thing. We value ideas. We believe the best ideas can come from anywhere.",
    },
    {
      title: "Community engagement",
      description:
        "We make a positive impact on our community. We believe in contributing to a vibrant local economy by supporting local businesses and through active community involvement.",
    },
    {
      title: "Security",
      description:
        "We are dedicated to the safety and security of our client and employees.",
    },
  ];

  return (
    <div className='list-container'>
      <div className='title'>
        <h1>core values</h1>
      </div>
      <div className='wrapper'>
        {values.map((value, index) => (
          <div className='list-item' key={index}>
            <div className='heading'>
              <div className='number'>
                <span>{index + 1}</span>
              </div>
              <h3 className='title'>{value.title}</h3>
            </div>
            <div className='content'>
              <p className='description'>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
