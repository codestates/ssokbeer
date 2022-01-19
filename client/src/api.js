import axios from "axios";
export const postSignup = async (body) => {
  const token = await axios.post("http://localhost:4000/user/signup", body);
  console.log(token);
};
