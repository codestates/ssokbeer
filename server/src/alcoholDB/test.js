const dishData = require("./dishes");
export const dishList = [];
let dishKey = Object.keys(dishData);
for (let i = 0; i < dishKey.length; i++) {
  dishList.push(dishData[dishKey[i]]);
}
