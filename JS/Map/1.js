// const objMapping = {};

// objMapping.tarun = true;
// objMapping.varun = true;
// objMapping.cat = true;
// objMapping.dog = true;
// objMapping.apple = true;

const map = new Map();

map.set("tarun", true);
map.set("varun", true);
map.set("cat", true);
map.set("dog", true);
map.set("apple", true);

// console.log("obj: ", objMapping, map);
map.delete("tarun");
map.set("name", "Satyam");
// console.log(map.has("cat"))
// console.log(map);
