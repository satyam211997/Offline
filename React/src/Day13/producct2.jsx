import { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        // Success
        setIsLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
        // Error
        setIsLoading(false);
      });
  }, []);

  console.log("Re-Render: ", isLoading, products);

  return (
    <div>
      <h1>My Product</h1>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <RotateLoader color="#36d7b7" />
        ) : (
          products.map((item) => {
            return (
              <div style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} />
                <p style={{ fontSize: 11 }} key={item.id}>
                  {item.title}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
