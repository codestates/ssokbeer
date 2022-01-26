"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dishList = void 0;

const dishData = require("./dishes");

const dishList = [];
exports.dishList = dishList;
let dishKey = Object.keys(dishData);

for (let i = 0; i < dishKey.length; i++) {
  dishList.push(dishData[dishKey[i]]);
}

