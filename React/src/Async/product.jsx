import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
const MyDiv = styled.div`
  border: 2px solid black;
`;

const FetchProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      const getProducts = async () => {
        let allProducts = await axios.get("https://fakestoreapi.com/products");
        console.log(allProducts.data);
        setProduct(allProducts.data);
        let category = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        console.log(category.data);
      };
      getProducts();
    } catch (err) {
      console.log(err, "their is an err");
    }
  }, []);

  return (
    <>
      <h1>My Products</h1>
      <div>
        {product.map((items) => {
          return (
            <MyDiv key={items.id}>
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.id}</p>
            </MyDiv>
          );
        })}
      </div>
    </>
  );
};
export default FetchProducts;
