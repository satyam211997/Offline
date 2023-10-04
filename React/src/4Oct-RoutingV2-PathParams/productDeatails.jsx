import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [deatails, setDetails] = useState([]);
  const params = useParams();
  //   console.log(params);
  useEffect(() => {
    const data2 = async () => {
      let result = (
        await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      ).data;
      console.log(result);
      setDetails(result);
    };
    data2();
  }, []);
  return (
    <div style={{ border: "2px solid silver", width: 500, padding: 10 }}>
      <h1>Product Details</h1>
      <p>Title :{deatails.title}</p>
      <p> Deatails :{deatails.description}</p>
      <p>Category :{deatails.category}</p>
      <img
        style={{ width: 200, marginLeft: 130 }}
        src={deatails.image}
        alt=""
      />
    </div>
  );
};
export default ProductDetails;
