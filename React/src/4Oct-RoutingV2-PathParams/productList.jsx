import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let listData = async () => {
      let result = (await axios.get("https://fakestoreapi.com/products")).data;
      console.log(result);
      setProductList(result);
    };
    listData();
  }, []);
  return (
    <>
      <h1>My Products</h1>
      <ul>
        {productList.map((item) => {
          return (
            <Link key={item.id} to={`/productDetails/${item.id}`}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default ProductList;
