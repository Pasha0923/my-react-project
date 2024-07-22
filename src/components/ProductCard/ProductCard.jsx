// підготували універсальний шаблон за допомогою механізма
// props(в результаті чого наші компоненти стали перевикористовуваємими для різних даних)
// ProductCard очікує пропси деструктуризуємо їх і підставляємо їх з таким же ім'ям нижчев розмітку!
import css from "./ProductCard.module.css";
import clsx from "clsx";
import { FaCartPlus } from "react-icons/fa6";
const ProductCard = ({
  img,
  productName,
  description,
  price,
  quantity,
  hasDiscount = false,
  promotional = false,
}) => {
  // console.log(css);
  return (
    // у випадку якщо карточка акційна тобто (promotional = true)
    // то нам треба додавати ще один клас наприклад cardPromotional
    // і відбулося фарбування карточки за допомогою додавання дод.класу до картки

    // ВАРІАНТ №1
    // <div className={`${css.card} ${promotional ? css.cardPromotional : ""}`}>
    // ВАРІАНТ №2
    // Якщо пропс promotional буде true тоді буде додаватися додатковий клас який буде фарбувати картку
    // Назва класу (.cardPromotional)береться динамічно з js об'єкту тому в квадратних дужках
    <div
      className={clsx(css.card, {
        [css.cardPromotional]: promotional === true,
      })}
    >
      <img className={css.cardImg} width={300} src={img} alt="" />
      <h3 className={css.cardTitle}>
        {productName} {hasDiscount ? <span>🎁 BIG SALE</span> : null}
        {/* {productName} {hasDiscount && <span> BIG SALE</span>} */}
      </h3>
      <p className={css.cardDescription}>items left: {quantity}</p>
      <h4 className={css.cardPrice}>Price: ${price}</h4>
      <p className={css.cardDescription}>{description}</p>
      <div className={css.cardBtnWrapper}>
        <button className={css.cardAddToCardBtn} type="button">
          <FaCartPlus />
          Add to Cart
        </button>
        <button className="cardSmileBtn" type="button">
          😶
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
