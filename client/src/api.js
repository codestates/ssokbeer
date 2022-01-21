import axios from "axios";
export const postSignup = async (body) => {
  const { data } = await axios.post("http://localhost:4000/user/signup", body, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(data);
};
