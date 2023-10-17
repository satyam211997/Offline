import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const HomePageFake = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  // const [result, setResult] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchApi = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        // console.log(fetchApi.data);
        setFirst(fetchApi.data);
      } catch (error) {
        console.log(error, "No categories available");
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getData2 = async () => {
      try {
        const fetchApi2 = await axios.get("https://fakestoreapi.com/products");
        // console.log(fetchApi2.data);
        setSecond(fetchApi2.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData2();
  }, []);
  const memo = useMemo(() => {
    const mapping = {};
    for (let item of first) {
      const match = second.filter((x) => x.category === item);

      // eslint-disable-next-line no-prototype-builtins
      if (!mapping.hasOwnProperty(item)) {
        mapping[item] = match;
      }
    }
    // setResult(result);
    return mapping;
  }, [first, second]);
  console.log(memo);
  // console.log(result);

  return (
    <>
      <div>
        {Object.keys(memo).map((key) => {
          return (
            <div key={key}>
              <p>{key}</p>
              <ul>
                {memo[key].map((product) => {
                  return <li key={product.id}>{product.title}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HomePageFake;
