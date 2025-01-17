import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      name: "name",
      reviewId: 120323,
      reviewer: {
        profilePhotoUrl: "https://placehold.co/400",
        displayName: "Name",
        isAnonymous: false,
      },
      starRating: "THREE",
      comment:
        "Спасибо мастеру за работу. Заказывал свитер. Покупкой остался доволен. Работа была сделана быстро и качественно. Обязательно буду к вам обращаться.",
      createTime: "01/01/2024",
    },
    {
      name: "name",
      reviewId: 120323,
      reviewer: {
        profilePhotoUrl: "https://placehold.co/400",
        displayName: "Name",
        isAnonymous: false,
      },
      starRating: "THREE",
      comment:
        "Спасибо мастеру за работу. Заказывал свитер. Покупкой остался доволен. Работа была сделана быстро и качественно. Обязательно буду к вам обращаться.",
      createTime: "01/01/2024",
    },
    {
      name: "name",
      reviewId: 120323,
      reviewer: {
        profilePhotoUrl: "https://placehold.co/400",
        displayName: "Name",
        isAnonymous: false,
      },
      starRating: "THREE",
      comment:
        "Спасибо мастеру за работу. Заказывал свитер. Покупкой остался доволен. Работа была сделана быстро и качественно. Обязательно буду к вам обращаться.",
      createTime: "01/01/2024",
    },
    {
      name: "name",
      reviewId: 120323,
      reviewer: {
        profilePhotoUrl: "https://placehold.co/400",
        displayName: "Name",
        isAnonymous: false,
      },
      starRating: "THREE",
      comment:
        "Спасибо мастеру за работу. Заказывал свитер. Покупкой остался доволен. Работа была сделана быстро и качественно. Обязательно буду к вам обращаться.",
      createTime: "01/01/2024",
    },
  ];

  // const { data, error, isLoading } = useSWR('/api/user', () => {
  //   fetch(`https://mybusiness.googleapis.com/v4/accounts/${process.env.ACCOUNT_ID}/locations/${process.env.LOCATION_ID}/reviews`)
  // });

  // if (error) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
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
                <div className="author">
                  <img src={review.reviewer.profilePhotoUrl} />
                  <p>
                    <span>{review.reviewer.displayName}</span>
                    <br />
                    <span className="data">{review.createTime}</span>
                  </p>
                </div>
                <div className="rating">
                  <span>5/{review.starRating}</span>
                </div>
              </div>
              <div className="comment">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
