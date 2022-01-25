import axios from "axios";

const URL = "http://localhost:4000";

export const postSignup = async (body) => {
  try {
    const { data } = await axios.post(`${URL}/user/signup`, body);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};

export const postLogin = async (body) => {
  const data = await axios.post(`${URL}/user/login`, body);
  return data;
};

export const getProfile = async () => {
  try {
    const {
      data: {
        userInfo: { email, nickname },
      },
    } = await axios.get(`${URL}/user/profile`);

    return { email, nickname };
  } catch (e) {
    console.log("마이페이지 접근 실패");
    console.log(e.response);
  }
};

export const logout = async () => {
  try {
    const data = await axios.delete(`${URL}/user/logout`);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const patchProfile = async (body) => {
  try {
    const data = await axios.patch(`${URL}/user/profile`, body);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};

export const postContent = async (body) => {
  try {
    await axios.post(`${URL}/content`, body);
  } catch (e) {
    console.log(e.response);
  }
};

export const getContent = async () => {
  try {
    const {
      data: { allContent, rankContent },
    } = await axios.get(`${URL}/content`);
    console.log("겟 컨텐츠 성공");

    return { allContent, rankContent };
  } catch (e) {
    console.log(e.response);
  }
};

export const patchContent = async (id, body) => {
  try {
    await axios.patch(`${URL}/content/edit/${id}`, body);
    console.log("패치 컨텐츠 성공");
  } catch (e) {
    console.log(e.response);
  }
};

export const deleteContent = async (id) => {
  try {
    await axios.delete(`${URL}/content/${id}`);
    console.log("딜리트 컨텐츠 성공");
  } catch (e) {
    console.log(e.response);
  }
};

export const postLike = async (id) => {
  try {
    const like = await axios.post(`${URL}/like/${id}`);

    return like;
  } catch (e) {
    console.log(e.response);
  }
};

export const getSingleContent = async (id) => {
  try {
    const {
      data: { visitCnt },
    } = await axios.get(`${URL}/content/${id}`);

    return visitCnt;
  } catch (e) {
    console.log(e.response);
  }
};

export const postComment = async (comment) => {
  try {
    const data = await axios.post(`${URL}/comment`, comment);

    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const editComment = async (id, content) => {
  try {
    const data = await axios.patch(`${URL}/comment/${id}`, { content });
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const deleteComment = async (id) => {
  try {
    const data = await axios.delete(`${URL}/comment/${id}`);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const getAlcohol = async (type) => {
  try {
    const data = await axios.get(`${URL}/alcohol?type=${type}`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.response);
  }
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours(),
    minute = d.getMinutes();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${month}월 ${day}일 ${hour}시 ${minute}분`;
};
