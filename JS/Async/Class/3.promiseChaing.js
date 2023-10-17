const promise = () => {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
};

promise()
  .then((data) => {
    console.log(data, "LN9");
    throw data + 100;
  })
  .catch((err) => console.log("this is err", err))
  .then((data) => {
    console.log(data, "13");

    return data;
  });
