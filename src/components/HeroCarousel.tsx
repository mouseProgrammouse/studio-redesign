import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const AMOUNT_OF_SLIDES = 9;

const HeroCarousel: React.FC = () => {
  const { t } = useTranslation();

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

  const SLides = Array.from({ length: AMOUNT_OF_SLIDES }, (_, index) => ({
    img: `/img/slide${index + 1}.png`,
    description: t(`slideDescription${index < 10 ? `0${index}` : index}`),
  }));

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {SLides.map((slide, index) => (
          <div className="slide" key={`${slide.img}-${index}`}>
            <img src={slide.img} alt={slide.description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
