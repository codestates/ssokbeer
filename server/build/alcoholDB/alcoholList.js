"use strict";

require("core-js/modules/es.promise.js");

const beer = "./beer";
const soju = "./soju";

const fs = require("fs");

const beerName = ["불사조", "카스 후레쉬", "d", "달서", "하이트 콜드", "피츠", "강서", "골든", "광화문", "해운대", "한강", "인디아", "제주 펠롱", "제주 위트", "전라", "클라우드", "맥스", "오비 프리미어", "평창", "퀸", "S", "서빙고", "서초", "서울", "Stout", "대강", "오늘", "Weizen", "여수", "ㅋ"];
const sojuName = ["잎세주 ", "처음처럼", "순하리 처음처럼 복숭아", "순하리 처음처럼 유자", "한라산", "좋은데이", "청하", "깔라만시", "좋은데이 파인애플", "좋은데이 유자", "좋은데이 자몽", "좋은데이 블루베리", "좋은데이 석류", "순하리 처음처럼 사과", "참이슬", "참이슬 오리지널", "참이슬 16.9도", "청보도에 이슬", "자두에 이슬", "시원", "자몽에 이슬", "화이트", "매화수", "C1블루", "맛있는 참", "오투린", "순한참 유자", "순한참 애플망고", "순한참 청포도", "순한참 블루베리", "순한참 자몽", "C1블루 자몽", "C1블루 로즈"];
let beerList = [];
const beers = fs.readdirSync(beer, async (err, files) => {});
beers.forEach((file, idx) => {
  beerList.push({
    name: beerName[idx],
    img: file
  });
});
let sojuList = [];
const sojus = fs.readdirSync(soju, async (err, files) => {});
sojus.forEach((file, idx) => {
  sojuList.push({
    name: sojuName[idx],
    img: file
  });
});