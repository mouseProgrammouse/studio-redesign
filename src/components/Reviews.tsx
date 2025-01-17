import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      reviewerName: "Александр Зубенко",
      reviewId: "review-01",
      profilePhotoUrl: "/img/review01.png",
      starRating: "5",
      comment:
        "Спасибо мастеру за работу. Заказывал свитер. Покупкой остался доволен. Работа была сделана быстро и качественно. Обязательно буду к вам обращаться.",
      createTime: "12/04/2024",
    },
    {
      reviewerName: "Юнночка",
      reviewId: "review-02",
      profilePhotoUrl: "/img/review02.png",
      starRating: "5",
      comment:
        "Низкий поклон мастеру !!!  Заказывала платье. Обновка очень порадовала, хороший фасон, красивый цвет, необыкновенный узор.<br/>Я осталась очень довольна покупкой.все работы высочайшего уровня! Очень стильный и женственный дизайн, прекрасное качество пряжи. Отлично сидит по фигуре. Сам процесс заказа и общения был очень приятным и профессиональным. Работа была сделана быстро качественно и с любовью<br/>Обязательно вернусь к Вам еще и буду рекомендовать другим.<br/>Сердечно благодарю!<br/>Также спасибо за ремонт одежды.<br/>Золотые ручки!!!",
      createTime: "03/02/2024",
    },
    {
      reviewerName: "Елена Макарова",
      reviewId: "review-03",
      profilePhotoUrl: "/img/review03.png",
      starRating: "5",
      comment:
        "Хочу висловити велику подяку майстрині Тетяні за її золоті руки. Всі замовлення з ремонту одягу які я залишала в ательє були зроблені вчасно і якісно. Дякую. Рекомендую всім.",
      createTime: "18/01/2024",
    },
    {
      reviewerName: "Наташа Коваль - Болдирева",
      reviewId: "review-04",
      profilePhotoUrl: "/img/review04.png",
      starRating: "5",
      comment:
        "Вязала  джемпирок для донечки і замовляла пошиття постільної білизни,залишилась задоволена і тканиною і якістю  пошиву.<br/>Дякую.",
      createTime: "23/03/2022",
    },
  ];

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
                  <img src={review.profilePhotoUrl} />
                  <p>
                    <span>{review.reviewerName}</span>
                    <br />
                    <span className="data">{review.createTime}</span>
                  </p>
                </div>
                <div className="rating">
                  <span>5/{review.starRating}</span>
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
