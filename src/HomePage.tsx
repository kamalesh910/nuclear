import React from 'react';

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const quotes = [
    {
      text: 'Elevating Your Experience',
      author: 'John Doe',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/12/SU/EU/FX/35294298/automatic-hydraulic-passenger-lift-500x500.jpg',
    },
    {
      text: 'Safety First, Ascend Always',
      author: 'Jane Smith',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/12/SU/EU/FX/35294298/automatic-hydraulic-passenger-lift-500x500.jpg',
    },
    {
      text: 'Rise to New Heights with Us',
      author: 'Bob Johnson',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/12/SU/EU/FX/35294298/automatic-hydraulic-passenger-lift-500x500.jpg',
    },
  ];

  return (
    <div>
      {/* //  <Slider {...sliderSettings}> */}
      <div>
        <img src={quotes[0].image} alt="Elevator 1" />
        <div className="quote-overlay">
          <p>{quotes[0].text}</p>
          <p className="author">{quotes[0].author}</p>
        </div>
      </div>
      <div>
        <img src={quotes[1].image} alt="Elevator 2" />
        <div className="quote-overlay">
          <p>{quotes[1].text}</p>
          <p className="author">{quotes[1].author}</p>
        </div>
      </div>
      <div>
        <img src={quotes[2].image} alt="Elevator 3" />
        <div className="quote-overlay">
          <p>{quotes[2].text}</p>
          <p className="author">{quotes[2].author}</p>
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default HomePage;
