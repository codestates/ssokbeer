const dishData = require("./dishes");

// for (let i = 1; i < 65; i++) {
//   dishList.push([
//     { name: dishData[`dish${i}`].name, img: dishData[`dish${i}`].img, content: dishData[`dish${i}`].content },
//   ]);
// }
// console.log(...dishData);

// console.log(Object.keys(dishData));
// for (dish in dishData) {
//   dishList.push({ dish: dishData[dish] });
// }

export const dishList = [];
let dishKey = Object.keys(dishData);
for (let i = 0; i < dishKey.length; i++) {
  dishList.push(dishData[dishKey[i]]);
}
// console.log(dishList);
