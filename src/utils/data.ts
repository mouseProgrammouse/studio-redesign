export type Review = {
  reviewerName: string;
  reviewId: string;
  profilePhotoUrl: string;
  starRating: string;
  comment: string;
  createTime: string;
};

export const reviews: Review[] = [
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

export const supportedLang: string[] = ["ru", "uk"];
