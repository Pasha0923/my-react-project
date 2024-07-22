import { IoPersonAddSharp } from "react-icons/io5";

import css from "./MailBoxForm.module.css";
import { useState } from "react";

const MailBoxForm = ({ onAddNewMailBox }) => {
  // КОНТРОЛЬОВАНА ФОРМА 2 варіанта
  // ВАРІАНТ 1 ЗБЕРЕЖЕННЯ State окремими полями
  // (тут в state зберігається пуста строка)
  // СТВОРЮЄМО state для кожного поля input!!!!!!
  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");
  // ВАРІАНТ 2 ЗБЕРЕЖЕННЯ State в об'єкті
  // (тут в state зберігається не строка а об'єкт)
  // В об'єкті зберігається початковий стан нашої форми
  // тобто в state зберігається object
  const [values, setValues] = useState({
    userName: "",
    email: "",
  });
  // Функія яка під час кожної подіїї Onchange буде змінювати state
  const handleChange = (e) => {
    //  ВАРІАНТ 1 ЯКЩО зберігаємо state окремими полями
    // + додаємо динаміку типу якщо є промокод то є знижка
    // if (e.target.name === "userName") {
    //   setUserName(e.target.value); // встановлюємо значення яке користувач ввів в інпут
    // } else if (e.target.name === "email") {
    //   setEmail(e.target.value); //встановлюємо значення яке користувач ввів в інпут
    // }
    // const size = {
    //   l: "large",
    //   m: "medium",
    // };
    // const keyl = "l"; // строка "l" лежить в змін.keyl
    // const keym = "m"; //  строка "m" лежить в змін.keym
    // (size.l === size["l"]) === size[keyl];
    // (size.m === size["m"]) === size[keym];

    const key = e.target.name;
    const value = e.target.value;
    // { userName: "Max", email: "max", email: "max@"  }
    // { userName: "Max", email: "max@"  }
    // ЯКЩО У НАС БАГАТО ПОЛІВ робимо через контрольовану форму
    setValues({ ...values, [key]: value });
  };
  //Функція яка буде спрацьовувати під час прослуховування події submit
  const handleFormSubmit = (e) => {
    // відключаємо стандартну поведінку браузера під час сабміту форми
    e.preventDefault();
    // ПАТЕРН НЕКОНТРОЛЬОВАНОЇ ФОРМИ
    // Витягуємо дані які користувач ввів в форму
    // const elements = e.currentTarget.elements;
    // const userName = elements.userName.value;
    // const email = elements.email.value;
    // console.log(userName);
    // console.log(email);
    // const formData = {
    //   userName,
    //   email,
    // };
    // Цей пропс (а це по суті ФУНКЦІЯ) під час виклику очікує якийсь обєкт formData
    // onAddNewMailBox(formData);
    //   e.CurretTarget.reset();

    // ВАРІАНТ 1 Збираємо дані в один об'єкт
    // ВАРІАНТ 1.1
    // const formData = {
    //   userName,
    //   email,
    // };

    // ВАРІАНТ 2 Збираємо дані в один об'єкт
    const formData = {
      userName: values.userName,
      email: values.email,
    };
    console.log(formData);

    onAddNewMailBox(formData);
    //ВАРІАНТ №1  Після успішної відправки форми state
    //  повертається до поч.значення очищаэться форма ВАРІАНТ №1
    // setuserName("");
    // setEmail("");
    //ВАРІАНТ №2  Після успішної відправки форми state
    //  повертається до поч.значення очищаэться форма ВАРІАНТ №2
    setValues({
      userName: "",
      email: "",
    });
  };

  return (
    // підписуємось на слухач події сабміту цієї форми
    <form onSubmit={handleFormSubmit} className={css.form}>
      <h2 className={css.formTitle}>Add new mailbox</h2>
      <label className={css.label}>
        <span className={css.labelText}>User name:</span>
        <input
          className={css.formInput}
          placeholder="Alex Mihalich"
          type="text"
          name="userName"
          //прив'язуємо input до state
          //   (змушуємо інпут відображати те що знаходиться в state)
          value={values.userName}
          // обробник onChange слідкує за змінами в inputi userName
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Email:</span>
        <input
          className={css.formInput}
          placeholder="alex@patron.com"
          type="email"
          name="email"
          //прив'язуємо input до state
          //   (змушуємо інпут відображати те що знаходиться в state)
          value={values.email}
          // обробник onChange слідкує за змінами в inputi email
          onChange={handleChange}
          required
        />
      </label>
      {/* //Якщо в userName вводимо "@present2024" , то рене=дериться p */}
      {values.userName === "@present2024" && (
        <p>Congratulations! You won a 20% discount promo - #231D3🎉</p>
      )}
      <button
        className={css.submitBtn}
        type="submit"
        title="Click to save new mailbox"
        aria-label="Add new mailbox"
      >
        <IoPersonAddSharp />
      </button>
    </form>
  );
};

export default MailBoxForm;
