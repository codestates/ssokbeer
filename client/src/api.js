import axios from "axios";

export const postSignup = async (body) => {
  try {
    const { data } = await axios.post("http://localhost:8080/user/signup", body);
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
    } = await axios.get("http://localhost:8080/user/profile");
    return { email, nickname };
  } catch (e) {
    console.log(e.response);
  }
};
