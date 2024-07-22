import css from "../../App.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGallery = ({ productData }) => {
  return (
    <div className={css.cardGrid}>
      {/* // відрендерили (відобразили) список колекції елементів за допомогою синтаксису react
      кожному елементу ітерації (item це один з об'єктів) повертаємо розмітку
      нашої компоненти карточки і за допомогою пропсів прокидуємо дані. 
      Кожному об'єкту обовязково повинні присвоювати унікальний ключ key (для того щоб react знав у якому порядку 
      треба відмальовувати елементи) */}
      {productData.map((item) => {
        const isPromotional = item.quantity <= 2;
        //кожен item буде повертати карточку
        // item це об'єкт у якого будуть поля key, productName , img , price,hasDiscount,  description
        return (
          <ProductCard
            // коли використовуємо map то треба додавати props key на найвищий елемент
            key={item.id}
            productName={item.productName}
            img={item.img}
            price={item.price}
            hasDiscount={item.hasDiscount}
            description={item.description}
            quantity={item.quantity}
            //props promotional додаємо на основі товарів які залишилися
            promotional={isPromotional}
          />
        );
      })}
    </div>
  );
};

export default ProductGallery;
