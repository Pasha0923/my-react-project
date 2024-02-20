import "./App.css";
import MailBox from "./components/MailBox";
import ProductCard from "./components/ProductCard";
const productData = [
  {
    id: "1_product",
    productName: "Taco Black",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 10.99,
    hasDiscount: true,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "2_product",
    productName: "Big Mak",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 6.25,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
  {
    id: "3_product",
    productName: "Taco S",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 3.99,
    hasDiscount: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
  },
];
function App() {
  return (
    <div>
      <MailBox />
      {productData.map((item) => {
        return (
          <ProductCard
            key={item.id}
            productName={item.productName}
            img={item.img}
            price={item.price}
            hasDiscount={item.hasDiscount}
            description={item.description}
          />
        );
      })}
      {/* 
      <ProductCard
        productName="Taco Black"
        img="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
        hasDiscount={true}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?"
      /> */}
    </div>
  );
}

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
export default App;
