const ls = document.getElementsByClassName("dkjMxf");

 for (let i of ls) {
  const name = i.querySelector(
    '[style="text-overflow: ellipsis; overflow: hidden;"]'
  );
  console.log(name.innerText);
} 
/* const names = new Set(); // Using a Set to automatically filter out duplicates
let uniqueNames = [];
for (let j of ls) {
  const nameElements = document.querySelectorAll(".XEazBc");

  nameElements.forEach((element) => {
    const name = element.textContent.trim();
    if (name) {
      names.add(name);
    }
  });

  uniqueNames = Array.from(names); // Convert Set to an array
}

console.log(uniqueNames);
 */