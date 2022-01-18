import jwt from "jsonwebtoken";
export const verify = async (token) => {
  const decryptToken = jwt.verify(token, process.env.ACCESS_SECRET);
  return decryptToken;
};
