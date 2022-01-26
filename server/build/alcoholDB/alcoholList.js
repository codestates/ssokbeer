"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sojus = exports.beers = void 0;
const beerName = ["불사조", "카스 후레쉬", "d", "달서", "하이트 콜드", "피츠", "강서", "골든", "광화문", "해운대", "한강", "인디아", "제주 펠롱", "제주 위트", "전라", "클라우드", "맥스", "오비 프리미어", "평창", "퀸", "S", "서빙고", "서초", "서울", "Stout", "ㅋ"];
const beerUrl = ["https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/bulssajo.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/cass_fresh.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/d.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/dalseo.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/extra_cold.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/fitz.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/gangseo.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/golden.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/gwanghwamun.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/haeundae.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/hangang.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/india.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/jeju_pellong.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/jeju_wit.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/jeolla.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/kloud.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/max.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/ob_premier.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/pyeongchang.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/queen.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/s.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/seobinggo.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/seocho.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/seoul.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/stout.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/beer/z.jpg?raw=true "];
const sojuName = ["잎세주 ", "처음처럼", "순하리 처음처럼 복숭아", "순하리 처음처럼 유자", "한라산", "좋은데이", "청하", "깔라만시", "좋은데이 파인애플", "좋은데이 유자", "좋은데이 자몽", "좋은데이 블루베리", "좋은데이 석류", "순하리 처음처럼 사과", "참이슬", "참이슬 오리지널", "참이슬 16.9도", "청보도에 이슬", "자두에 이슬", "시원", "자몽에 이슬", "화이트", "매화수", "C1블루", "맛있는 참", "오투린"];
const sojuUrl = ["https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img1.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img3.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img4.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img5.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img6.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img7.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img8.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img9.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img10.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img11.png?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img12.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img13.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img14.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img15.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img16.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img17.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img18.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img19.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img20.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img21.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img22.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img23.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img24.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img25.jpg?raw=true", "https://github.com/StrummingDown/ssokbeerImg/blob/main/soju/img26.jpg?raw=true"];
const sojus = sojuUrl.map((url, idx) => {
  return {
    name: sojuName[idx],
    img: url,
    type: "soju"
  };
}); // 음식  이름 사진 정보
// 술 하나당 2개
// 전체 음식 개수 ?
// 20 개
// pairDish = [ [ {한식}, {중식}, {양식} ] ]

exports.sojus = sojus;
const beers = beerUrl.map((url, idx) => {
  return {
    name: beerName[idx],
    img: url,
    type: "beer"
  };
}); // {sojus : [{}...{}....{}],beers: [{}..{}]}  x
// 다른방법 ?

exports.beers = beers;