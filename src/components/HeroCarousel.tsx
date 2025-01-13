import React from "react";
import Slider from "react-slick";

const HeroCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    accessibility: true,
    centerMode: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SLides = [
    { img: "/img/img1.png" },
    { img: "/img/img2.png" },
    { img: "/img/img3.png" },
    { img: "/img/img4.png" },
    { img: "/img/img5.png" },
    { img: "/img/img6.png" },
    { img: "/img/img7.png" },
    { img: "/img/img8.png" },
    { img: "/img/img9.png" },
  ];

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {SLides.map((slide, index) => (
          <div className="slide" key={`${slide.img}-${index}`}>
            <img src={slide.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
