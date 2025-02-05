import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { reviews } from "../utils/data";

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerPadding: "240px",
    accessibility: true,
    centerMode: true,
    pauseOnFocus: true,
    className: "center",
    responsive: [
      {
        breakpoint: 924,
        settings: {
          centerPadding: "160px",
          className: "center",
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          centerPadding: "40px",
          className: "center",
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews" id="Reviews">
      <h2>{t("reviewsTitle")}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className="slide" key={`review-${index}`}>
              <div className="slide-top">
                <div className="desktop-author">
                  <img src={review.profilePhotoUrl} alt="" />
                  <p>
                    <span>{review.reviewerName}</span>
                    <br />
                    <span className="data">{review.createTime}</span>
                  </p>
                </div>
                <div className="desktop-rating rating">
                  <span>5/{review.starRating}</span>
                </div>
                <div className="mobile-author">
                  <img src={review.profilePhotoUrl} alt="" />
                  <p>
                    <span>{review.reviewerName}</span>
                    <br />
                    <span className="rating">5/{review.starRating}</span>
                  </p>
                </div>
              </div>
              <div className="comment">
                <p dangerouslySetInnerHTML={{ __html: review.comment }}></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
