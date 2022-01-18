import jwt from "jsonwebtoken";

export const verify = (token) => {
  const { dataValues } = jwt.verify(token, process.env.ACCESS_SECRET);
  return dataValues;
};
