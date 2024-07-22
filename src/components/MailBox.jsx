import { useEffect } from "react";
/* ОСНОВНІ USECASE хука USEEFFECT на різні етапи життя компоненти.
 Реакція на монтування компоненти:
  1. Надсилати мережеві запити, коли компонента відмалювалася.
  2. Вішати глобальні слухачі події(addEventListener) та setTimeout|setInterval.
  3. Зчитати, а краще синхронізувати дані з localStorage.

 Реакція на ДЕмонтування компоненти(clean up function):
  1. Відхиляються мережеві запити, перед тим, як компонента зникне.
  2. Прибираються глобальні слухачі події(removeEventListener) та clearTimeout|clearInterval.
 
 Реакція на оновлення компоненти(синхронізація):
  1. Надсилаються мережеві запити з актуальними данними.
  2. Синхронізуються дані з localStorage.


*/
const MailBox = ({
  onClose,
  emails,
  onLogEmail,
  onDeleteEmail,
  emailCounter,
}) => {
  // опишемо локальну колбек функцію яка потрібна для того щоб опрацювати логіку
  // кліку на кнопку button і передаємо їй колбек функцію в обробник події onclick
  // const handleClick = (event) => {
  //   console.log(event);
  //   console.log("Email has been sucessfuly sent");
  // };
  // ЯК РЕАКЦІЯ НА ТЕ ЩО КОМПОНЕНТ З'ЯВИВСЯ (ВІДМАЛЮВАВСЯ) на СТОРІНЦІ Є ВИВІД ПОВІДОМЛЕННЯ
  //1) РЕАКЦІЯ НА ПОЯВУ КОМПОНЕНТИ! ВІШАЮТЬСЯ глобальні слухачі події(addEventListener)
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
      // console.log(`You clicked some button ${event.code}`);
    };
    window.addEventListener("keydown", onKeyDown);
    console.log("MailBox has been MOUNTED");
    //2) РЕАКЦІЯ НА ДЕМОНТУВАННЯ !Прибираються глобальні слухачі події(removeEventListener)
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      console.log("MailBox has been UNMOUNTED");
    };
  }, [onClose]);
  return (
    <div>
      <h2>
        {/* Передали значення стану конкретно в цe місце щоб воно відмалювалося поруч зі MailBox */}
        MailBox <b>{emailCounter}</b> <button onClick={onClose}>ЗАКРИТИ</button>
      </h2>
      <ul>
        {/* НА ОСНОВІ ПЕРЕДАНОГО ПРОПСА EMAILS динамічно буде малюватися розмітка */}
        {/* відмальовуємо всі пошлтові скриньки з кнопкою button */}
        {/* email - це один об'єкт з нашого масиву emailsData який має поле email,userData */}
        {emails.map((email) => (
          <li key={email.id}>
            {/* Виводимо поля email i userName нашого масиву 
            Компоннент буде відмальовувати  поля userName і email користувача */}
            <p>
              User name: <b>{email.userName}</b>
            </p>
            <p>
              Email: <b>{email.email}</b>
            </p>
            <button onClick={() => onDeleteEmail(email.id)}>&times;</button>
          </li>
        ))}
        {/* 1-й варіант 
          Правильний синтаксис виклику функції onDeleteEmail після кліку на
          відповідну кнопку (button) за id 1 , за id 2 або id 3 і тут вона викликається*/}
        {/* <li>
          Mail 1 <button onClick={() => onDeleteEmail(1)}>&times;</button>
        </li>
        <li>
          Mail 2 <button onClick={() => onDeleteEmail(2)}>&times;</button>
        </li>
        <li>
          Mail 3 <button onClick={() => onDeleteEmail(3)}>&times;</button>
        </li> */}
      </ul>
      {/* ///* 2-й варіант синтаксису вішаємо функцію handleClick на обробник події onClick */}
      {/* <button onClick={handleClick}>Send mail</button> */}
      <button onClick={onLogEmail}>Send mail</button>
    </div>
  );
};

export default MailBox;
