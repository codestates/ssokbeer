import axios from "axios";

export const postSignup = async (body) => {
  try {
    const { data } = await axios.post("http://localhost:4000/user/signup", body);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};

export const getProfile = async () => {
  try {
    const {
      data: {
        userInfo: { email, nickname },
      },
    } = await axios.get("http://localhost:4000/user/profile");

    return { email, nickname };
  } catch (e) {
    console.log("마이페이지 접근 실패");
    console.log(e.response);
  }
};

export const patchProfile = async (body) => {
  console.log("body");
  console.log(body);
  try {
    const data = await axios.patch("http://localhost:4000/user/profile", body);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};

export const getContent = async () => {
  try {
    const {
      data: { allContent, rankContent },
    } = await axios.get("http://localhost:4000/content");
    console.log("겟컨텐츠 성공");

    return { allContent, rankContent };
  } catch (e) {
    console.log(e.response);
  }
};
export const postContent = async (title, content, img) => {
  try {
    console.log(title, content, img);
    await axios.post("http://localhost:4000/content", {
      title,
      content,
      img,
    });
  } catch (e) {
    console.log(e.response);
  }
};

export const postLike = async (id) => {
  try {
    const like = await axios.post(`http://localhost:4000/like/${id}`);

    return like;
  } catch (e) {
    console.log(e.response);
  }
};

export const getSingleContent = async (id) => {
  try {
    const {
      data: { visitCnt },
    } = await axios.get(`http://localhost:4000/content/${id}`);

    return visitCnt;
  } catch (e) {
    console.log(e.response);
  }
};

export const postComment = async (comment) => {
  try {
    const data = await axios.post(`http://localhost:4000/comment`, comment);

    return data;
  } catch (e) {
    console.log(e.response);
  }
};
