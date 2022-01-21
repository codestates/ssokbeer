import jwt from "jsonwebtoken";

export const verify = (token) => {
  const data = jwt.verify(token, process.env.ACCESS_SECRET);
  return data;
};
