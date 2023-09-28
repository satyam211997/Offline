import axios from "axios";

axios.get("https://fakestoreapi.com/products").then((data) => {
  //   console.log(data.data);
  let x = data.data.filter((item) => {
    return item.title === "men";
  });
  console.log(x);
});
