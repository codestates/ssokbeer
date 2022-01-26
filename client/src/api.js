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
  } catch (e) {}
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
  } catch (e) {}
};

export const logout = async () => {
  try {
    const data = await axios.delete(`${URL}/user/logout`, cookieOption);
    return data;
  } catch (e) {}
};

export const patchProfile = async (body) => {
  try {
    await axios.patch(`${URL}/user/profile`, body, cookieOption);
  } catch (e) {}
};

export const postContent = async (body) => {
  try {
    await axios.post(`${URL}/content`, body, { withCredentials: true });
  } catch (e) {}
};

export const getContent = async () => {
  try {
    const {
      data: { allContent, rankContent },
    } = await axios.get(`${URL}/content`, cookieOption);

    return { allContent, rankContent };
  } catch (e) {}
};

export const patchContent = async (id, body) => {
  try {
    await axios.patch(`${URL}/content/edit/${id}`, body, cookieOption);
  } catch (e) {}
};

export const deleteContent = async (id) => {
  try {
    await axios.delete(`${URL}/content/${id}`, cookieOption);
  } catch (e) {}
};

export const postLike = async (id) => {
  try {
    const like = await axios.post(`${URL}/like/${id}`, {}, cookieOption);

    return like;
  } catch (e) {}
};

export const getSingleContent = async (id) => {
  try {
    const {
      data: { visitCnt },
    } = await axios.get(`${URL}/content/${id}`, cookieOption);

    return visitCnt;
  } catch (e) {}
};

export const postComment = async (comment) => {
  try {
    const data = await axios.post(`${URL}/comment`, comment, cookieOption);

    return data;
  } catch (e) {}
};

export const editComment = async (id, content) => {
  try {
    const data = await axios.patch(`${URL}/comment/${id}`, { content }, cookieOption);
    return data;
  } catch (e) {}
};

export const deleteComment = async (id) => {
  try {
    const data = await axios.delete(`${URL}/comment/${id}`, cookieOption);
    return data;
  } catch (e) {}
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
  } catch (e) {}
};

export const getSingleAlcohol = async (id) => {
  try {
    const {
      data: { oneAlcohol },
    } = await axios.get(`${URL}/alcohol/detail?id=${id}`, cookieOption);

    return oneAlcohol;
  } catch (e) {}
};

export const search = async (type, value) => {
  try {
    const {
      data: { result },
    } = await axios.get(`${URL}/content/search?type=${type}&value=${value}`);
    return result;
  } catch (e) {}
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
  }
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes();
  return `${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day} ${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};

export const visitPlus = async (id) => {
  await axios.patch(`${URL}/content/${id}`);
};
