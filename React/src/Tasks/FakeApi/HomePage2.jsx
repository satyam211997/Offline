import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const HomePAge2 = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data1 = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        //         console.log(data1.data);
        setFirst(data1.data);
      } catch (error) {
        console.log(error, "No item found");
      }
    };
    const getData2 = async () => {
      try {
        const data2 = await axios.get("https://fakestoreapi.com/products");
        //         console.log(data2.data);
        setSecond(data2.data);
      } catch (err) {
        console.log(err, "second api err");
      }
    };
    getData();
    getData2();
  }, []);
  const memo = useMemo(() => {
    const mapping = {};
    for (let item of first) {
      const matchingElements = second.filter((x) => x.category === item);
      if (!mapping.hasOwnProperty(matchingElements)) {
        mapping[item] = matchingElements;
      }
    }
    return mapping;
  }, [first, second]);
  console.log(memo);
  return (
    <div style={{ border: "2px solid black", margin: "10px", gap: "20px" }}>
      {Object.keys(memo).map((item) => {
        return (
          <div key={item}>
            <div>{item}</div>
            <ol style={{ border: "2px solid black" }}>
              {memo[item].map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};
export default HomePAge2;
