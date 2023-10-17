// let map = new Map();
// map.set(1, 1);
// map.set(2, 1);
// map.set(4, 1);
// // console.log(map);
// console.log(map.size);

function LRU(key, value) {
  let map = new Map();
  if (map.size < 2) {
    map.set(key, value);
  }

  console.log(map);
}
LRU(1, 1);
LRU(2, 2);
LRU(3, 3);
// console.log(LRU(1, 1));
// console.log(LRU(2, 2));
// console.log(LRU(3, 3));
