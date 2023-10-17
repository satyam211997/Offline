import axios from "axios";
import { useEffect, useState } from "react";

const AfterTimeProductLoad = () => {
  const [product, setProduct] = useState([]);
  let passDate = new Date("October 13, 2023 14:41:00");
  let passTime = passDate.getTime();

  let currentTime = new Date().getTime();

  let x = passTime - currentTime;
  useEffect(() => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        console.log(data.data);
        setProduct(data.data);
      });
    }, x);
  }, []);
  return (
    <>
      <div>My Products</div>
      <div>
        {product.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </>
  );
};

export default AfterTimeProductLoad;
