import { LOGIN, SOCIAL_LOGIN, USER_ID, CHANGE } from "../action";
import { initialState } from "./initialState";

const allReducer = (state = initialState, action) => {
  let clone;
  switch (action.type) {
    case LOGIN:
      clone = Object.assign({}, state);
      clone.isLogin = action.isLogin; //액션에서 직접 트루펄스 적어줘야함
      console.log(clone);
      return clone;

    case SOCIAL_LOGIN:
      clone = Object.assign({}, state);
      clone.socialType = action.socialType; //구글이냐 깃허브냐

      return clone;
    case USER_ID:
      clone = Object.assign({}, state);
      clone.userId = action.userId; //초기값은 빈객체

      return clone;
    case CHANGE:
      clone = Object.assign({}, state);
      clone.change += 1; //구글이냐 깃허브냐

      return clone;

    default:
      return state;
  }
};

export default allReducer;
