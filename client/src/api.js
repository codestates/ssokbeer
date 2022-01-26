import axios from "axios";

// "https://api.bom-ko.com";
export const URL = "http://localhost:4000";
export const IMG_BASE = "https://github.com/StrummingDown/ssokbeerImg/blob/main/ssokbeerlogo.png?raw=true";

const cookieOption = {
  headers: {
    Accept: "application/json",

    "Content-Type": "application/json",

    Cache: "no-cache",
  },

  withCredentials: true,
};

export const postSignup = async (body) => {
  try {
    const {
      data: {
        result: { id },
      },
    } = await axios.post(`${URL}/user/signup`, body, cookieOption);

    return id;
  } catch (e) {
    console.log(e.response);
  }
};

export const postLogin = async (body) => {
  const data = await axios.post(`${URL}/user/login`, body, cookieOption);
  return data;
};

export const getProfile = async () => {
  try {
    const {
      data: {
        userInfo: { email, nickname },
      },
    } = await axios.get(`${URL}/user/profile`, cookieOption);

    return { email, nickname };
  } catch (e) {
    console.log("마이페이지 접근 실패");
    console.log(e.response);
  }
};

export const logout = async () => {
  try {
    const data = await axios.delete(`${URL}/user/logout`, cookieOption);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const patchProfile = async (body) => {
  try {
    await axios.patch(`${URL}/user/profile`, body, cookieOption);
  } catch (e) {
    console.log(e.response);
  }
};

export const postContent = async (body) => {
  try {
    await axios.post(`${URL}/content`, body, { withCredentials: true });
  } catch (e) {
    console.log(e.response);
  }
};

export const getContent = async () => {
  try {
    const {
      data: { allContent, rankContent },
    } = await axios.get(`${URL}/content`, cookieOption);

    return { allContent, rankContent };
  } catch (e) {
    console.log(e.response);
  }
};

export const patchContent = async (id, body) => {
  try {
    await axios.patch(`${URL}/content/edit/${id}`, body, cookieOption);
    console.log("패치 컨텐츠 성공");
  } catch (e) {
    console.log(e.response);
  }
};

export const deleteContent = async (id) => {
  try {
    await axios.delete(`${URL}/content/${id}`, cookieOption);
  } catch (e) {
    console.log(e.response);
  }
};

export const postLike = async (id) => {
  try {
    const like = await axios.post(`${URL}/like/${id}`, {}, cookieOption);

    return like;
  } catch (e) {
    console.log(e.response);
  }
};

export const getSingleContent = async (id) => {
  try {
    const {
      data: { visitCnt },
    } = await axios.get(`${URL}/content/${id}`, cookieOption);

    return visitCnt;
  } catch (e) {
    console.log(e.response);
  }
};

export const postComment = async (comment) => {
  try {
    const data = await axios.post(`${URL}/comment`, comment, cookieOption);

    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const editComment = async (id, content) => {
  try {
    const data = await axios.patch(`${URL}/comment/${id}`, { content }, cookieOption);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const deleteComment = async (id) => {
  try {
    const data = await axios.delete(`${URL}/comment/${id}`, cookieOption);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const getAlcohol = async (type) => {
  try {
    const {
      data: { beer, soju },
    } = await axios.get(`${URL}/alcohol?type=${type}`, cookieOption);

    if (beer) {
      return beer;
    } else if (soju) {
      return soju;
    }
  } catch (e) {
    console.log(e.response);
  }
};

export const getSingleAlcohol = async (id) => {
  try {
    const {
      data: { oneAlcohol },
    } = await axios.get(`${URL}/alcohol/detail?id=${id}`, cookieOption);

    return oneAlcohol;
  } catch (e) {
    console.log(e.response);
  }
};

export const search = async (type, value) => {
  try {
    const {
      data: { result },
    } = await axios.get(`${URL}/content/search?type=${type}&value=${value}`);
    return result;
  } catch (e) {
    console.log(e.response);
  }
};
export const postSocialLogin = async (type, code) => {
  console.log(type, code);
  try {
    const {
      data: { id },
    } = await axios.post(`${URL}/oauth/${type}`, { code });
    console.log(id);
    return id;
  } catch (e) {
    localStorage.removeItem("socialType");
    console.log(e.response);
  }
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${month}월 ${day}일 ${hour}시 ${minute}분`;
};
