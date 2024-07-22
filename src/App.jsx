// import css from "./App.module.css";
import { useEffect, useState } from "react";
import MailBox from "./components/MailBox";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import { nanoid } from "nanoid";
import MailBoxForm from "./components/MailBoxForm/MailBoxForm";
// import ProductCard from "./components/ProductCard/ProductCard";
const productData = [
  {
    id: "1_product",
    productName: "Taco Black",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 10.99,
    quantity: 1,
    hasDiscount: true,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "2_product",
    productName: "Big Mak",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 6.25,
    quantity: 7,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "3_product",
    productName: "Taco S",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 3.99,
    quantity: 2,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
];
// const emailsData = [
//   { id: "1", email: "foo@bar.com" },
//   { id: "2", email: "alex1336@bar.com" },
//   { id: "3", email: "maxIm0981@gmail.com" },
//   { id: "4", email: "maxIm0981@gmail.com" },
//   { id: "5", email: "maxIm0981@gmail.com" },
//   { id: "6", email: "maxIm0981@gmail.com" },
//   { id: "7", email: "maxIm0981@gmail.com" },
// ];
const emailsData = [
  { id: "1", email: "foo@bar.com", userName: "Arab" },
  { id: "2", email: "alex1336@bar.com", userName: "Alex" },
  { id: "3", email: "maxIm0981@gmail.com", userName: "Kiril" },
];
function App() {
  // counter - початкове значення змінна стану
  // setCounter - функція для зміни стану
  const [counter, setCounter] = useState(0);
  // const [emails, setEmails] = useState(emailsData);
  const [emails, setEmails] = useState(() => {
    // Зчитуэмо дані с локального сховища
    const stringifiedEmails = localStorage.getItem("emails");
    // Перевіряємо чи взагалі в локальному сховку є згадка про ключ emails
    // Якщо нічого в сховку немає то підставляємо дані масив emailsData як приклад дл користувача
    if (!stringifiedEmails) return emailsData;
    // Якщо дані в локальному сзовищі є то дана умова пропускається,
    //       то беремо нашу JSON строку з масивом повідомлень stringifiedEmails, парсимо її витягуємо з неї масив і
    //     повертаємо наш масив з повідомленнями які залишилися в сховку.
    const parsedEmails = JSON.parse(stringifiedEmails);

    return parsedEmails;
  });
  const [showMailBox, setShowMailBox] = useState(false);
  // РЕАКЦІЯ НА МОНТУВАННЯ І ОНОВЛЕННЯ КОМПОНЕНТИ (КОЛИ НАДСИЛАЄМО ПОШТОВІ ПОВІДОМЛЕННЯ І ВИВОДИМО ЇХ ЗНАЧЕННЯ У КОНСОЛЬ)
  useEffect(() => {
    console.log(`Current emails - `, emails);
  }, [emails]);
  // РЕАКЦІЯ НА МОНТУВАННЯ І ОНОВЛЕННЯ КОМПОНЕНТИ (ВИДАЛЯЄМО ПОШТОВІ ПОВІДОМЛЕННЯ І ВИВОДИМО ЇХ ЗНАЧЕННЯ У КОНСОЛЬ)
  useEffect(() => {
    // if (counter === 0) return;
    console.log(`Current emails - `, counter);
  }, [counter]);

  // Передаємо функцію onLogEmail з компоненти App через пропси в компоненту MailBox і прикріплюємо її на кнопку button

  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const onLogEmail = () => {
    console.log("Email was sent");
    //Під час виконання  функції логування повідомлення викликаємо функцію для зміни стану setCounter()
    // і в ній оновлюємо стан! Відбувається зміна state , компонента буде перерендуватися або перемальовуватися!

    // setCounter(counter + 1) ❌
    // setCounter((prevState) => prevState + 1) ✅
    setCounter((prevState) => prevState + 1);
  };
  // створимо функцію handleDelete яка приймає id повідомлення
  // очікує аргументом якийсь ідентифікатор поштового повідомлення і буде його виводити його в консоль
  const handleDelete = (mailId) => {
    console.log("mailId:", mailId);
    // використовуємо функцію зміни state і перевстановлюємо сюди новий масив без того елемента на який клікнули
    // ПРИ ЧОМУ В НОВОМУ МАСИВІ ми хочемо отримати всі елементи id яких не = id того елемента на який натиснули
    // ТУТ ФІЛЬТРУЄМО САМЕ STATE emails , тобто звертаємося до його початкового стану масиву об'єктів emailsData
    //  ВАРІАНТ №1 НЕ ЕТАЛОННИЙ!
    // setEmails(emails.filter((email) => email.id !== mailId));
    //  ВАРІАНТ №1 ЕТАЛОННИЙ!
    setEmails((prevState) => prevState.filter((email) => email.id !== mailId));
    // mailId = 5
    // [{id: 1}, email: "foo@bar.com" {id: 2, email: "alex1336@bar.com"}, {id: 3, email: "maxIm0981@gmail.com" }, {id: 4}, {id: 5}]
    // [{id: 1}, ] 1 !== 5 // true
    // [{id: 1}, {id: 2},] 2 !== 5 // true
    // [{id: 1}, {id: 2}, {id: 3},] 3 !== 5 // true
    // [{id: 1}, {id: 2}, {id: 3}, {id: 4},] 4 !== 5 // true
    // [{id: 1}, {id: 2}, {id: 3}, {id: 4},] 5 !== 5 // false
    // [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 6},] 6 !== 5 // true
  };
  // console.log("component rendered");

  // };
  // ОПИШЕМО ФУНКЦІЮ перемикання стану handleToggleMailBox яка буде змінювати попередній стан на протилежний
  const handleToggleMailBox = () => {
    setShowMailBox((prevState) => !prevState);
    // setShowMailBox(!showMailBox);
  };
  // Напишемо функцію яка описує додавання якихось нових об'єктів (поштової скриньки) до вже існуючого масиву в state
  const onAddNewMailBox = (mailData) =>
    // mailData це обєкт {email: "sjjh@ckcnv, userName: "Alex"} ...mailData копіюємо його і додаємо поле id.
    {
      const finalMail = {
        ...mailData,
        id: nanoid(),
      };
      // в рез-ті mailData стане таким об'єктом з полями{id: "cjkckvcjkv", email: "sjjh@ckcnv, userName: "Alex"}
      // За допомогою сеттера setEmails встановлюєио новий масив [] , скопіювавши попередній масив зі state
      // (або розгорнувши попередній старий масив)  і додавши до нього  новий об'кт finalMail уже з полем Id
      // setEmails([...emails, finalMail]); ❌
      setEmails((prevState) => [...prevState, finalMail]); // ✅
    };
  return (
    <div>
      {/* В копонент прокидуємо по пропсах функцію додавання нового об'єкта  */}
      <MailBoxForm onAddNewMailBox={onAddNewMailBox} />
      Ми хочемо саме тут бачити АКТУАЛЬНЕ (останнє) значення лічильника counter
      яке є при натисканні на кнопку send mail
      <h1>Counter Email: {counter}</h1>
      {/* ДОДАМО ЛОГІКУ ПЕРЕМИКАННЯ! 
      ПІД ЧАС КЛІКУ НА КНОПКУ button буде ВИКЛИКАНА ФУНКЦІЯ handleToggleMailBox */}
      <button onClick={handleToggleMailBox}>
        {showMailBox ? "Hide" : "Show"} Mailbox
      </button>
      {showMailBox ? (
        <MailBox
          //передаємо стан counter компоненті MailBox за допомогою пропса emailCounter
          emailCounter={counter}
          // передамо стан emails(який приймає початковий масив) компоненті MailBox за допомогою пропса emails
          emails={emails}
          onLogEmail={onLogEmail}
          //    пишемо назву пропсу який компонента MailBox очікує і передємо їй (компоненті MailBox)
          //  кастомну колбек функцію handleDelete через пропс onDeleteEmail
          onDeleteEmail={handleDelete}
          onClose={handleToggleMailBox}
        />
      ) : null}
      <h2>Counter Email: {counter}</h2>
      <ProductGallery productData={productData} />
    </div>
  );
}
export default App;

// Це запис як це відбувалося статично коли ми ручками картку додавали
//       <ProductCard
//         productName="Taco Black"
//         img="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//         hasDiscount={true}
//         description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?"
//       />

//       <ProductCard
//         productName="Taco S"
//         img="https://as2.ftcdn.net/v2/jpg/06/92/91/65/1000_F_692916595_s2xbxvEdUxIY8r5nYCbjBtA9Xr0TJhDu.jpg"
//         price={6.99}
//         description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto?"
//       />
//       <ProductCard
//         productName="Big Mac"
//         img="https://as2.ftcdn.net/v2/jpg/06/92/91/65/1000_F_692916595_s2xbxvEdUxIY8r5nYCbjBtA9Xr0TJhDu.jpg"
//         price={7.5}
//         description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iusto?"
//       />

//       {/* <img src={iconReact} alt="" />
//       <p>hello world!</p>
//       <input type="text" />
//       <button type="button">Learn react - give money</button> */}
//     </div>
//   );
// }

// const stateReviews = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// const [values, setValues] = useState(stateReviews);
// const resetFeedback = () => {
//   setValues(stateReviews);
// };
