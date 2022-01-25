// action types
export const LOGIN = "LOGIN";
export const SOCIAL_LOGIN = "SOCIAL_LOGIN";
export const USER_ID = "USER_ID";
export const CHANGE = "CHANGE";

// actions creator functions
export const setLogin = (isLogin) => {
  return {
    type: LOGIN,
    isLogin,
  };
};

export const setSocialType = (socialType) => {
  return {
    type: SOCIAL_LOGIN,
    socialType,
  };
};
export const setUserId = (userId) => {
  return {
    type: USER_ID,
    userId,
  };
};
export const setChange = () => {
  return {
    type: CHANGE,
  };
};
