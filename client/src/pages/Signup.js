import styled from "styled-components";
/* eslint-disable */
import { useForm } from "react-hook-form";
import { postSignup } from "../api";
import { useNavigate } from "react-router-dom";
import { setLogin, setUserId } from "../action";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
  padding: 10px;
`;
const Form = styled.form`
  width: 100%;
  text-align: center;
  max-width: 360px;
`;
const FormColumn = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 2px solid ${(props) => (props.error ? "red" : "rgba(0, 0, 0, 0.2)")};
  &::placeholder {
    font-size: 13px;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  color: black;
  font-weight: bold;
`;
const Button = styled.button`
  all: unset;
  padding: 15px 25px;
  background-color: #fbf0d2;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: gray;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  &:hover {
    background-color: ${(props) => (props.disabled ? "" : "#ffdc77")};
  }
  transition: 0.4s;
`;
const Valid = styled.button`
  all: unset;
  padding: 10px 15px;
  background-color: #fbf0d2;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: gray;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  &:hover {
    background-color: ${(props) => (props.disabled ? "" : "#ffdc77")};
  }
  transition: 0.4s;
`;
const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #f45555;
  margin: 10px 0;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit, errors, getValues, formState } = useForm({ mode: "onChange" }); // 핸들섭밋이란 함수가 있음
  // 이벤트 종류  on blu 한인붙에서 다른인풋으로 넘어갈때  ,
  const onSubmitValid = async () => {
    const { email, password, nickname } = getValues();
    const id = await postSignup({ email, password, nickname });

    localStorage.setItem("isLogin", true);
    localStorage.setItem("userId", id);
    dispatch(setLogin(true));
    dispatch(setUserId(id));
    nav("/");
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault(); // 빈객체 를 서버에 보내는현상 방지
          handleSubmit(onSubmitValid);
        }}
      >
        <FormColumn>
          <Label>이메일</Label>
          <Input
            ref={register({
              required: "이메일을 꼭 입력해주세요.",
              validate: {
                check: (value) => {
                  const regex = new RegExp(
                    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
                  );
                  //0~9까지 대소문자 A~Z  가없으면 false
                  //이메일형식을 체크하는 함수 .

                  const isValid = regex.test(value);

                  if (!isValid) {
                    return "이메일을 정확히 입력해주세요";
                  }
                  if (value === "") {
                    return "이메일을 꼭 입력해주세요";
                  }
                },
              },
            })}
            name="email"
            placeholder="이메일을 입력해주세요"
            error={errors.email?.message} //구조분해할당이 될때만 접근한다
          />
          <Span>{errors.email?.message}</Span>
        </FormColumn>
        <FormColumn>
          <Label>닉네임</Label>
          <Input
            ref={register({
              required: "닉네임을 꼭 입력해주세요.",
              validate: {
                check: (value) => {
                  const regex = new RegExp(/[^A-Za-z0-9가-힣]/);
                  const isValid = regex.test(value);
                  if (isValid) {
                    return "숫자, 영어, 한글만 입력해주세요";
                  }
                },
              },
              minLength: { value: 2, message: "최소 2자 이상 입력해주세요" },
              maxLength: { value: 8, message: "최대 8자 이하로 입력해주세요" },
            })}
            name="nickname"
            placeholder="2~8글자"
            error={errors.nickname?.message}
          />
          <Span>{errors.nickname?.message}</Span>
        </FormColumn>
        <FormColumn>
          <Label>비밀번호</Label>
          <Input
            ref={register({
              required: "비밀번호를 꼭 입력해주세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요",
              },
            })}
            name="password"
            type="password"
            placeholder="8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요"
            error={errors.password?.message}
          />
          <Span>{errors.password?.message}</Span>
        </FormColumn>
        <FormColumn>
          <Label>비밀번호 확인</Label>
          <Input
            ref={register({
              required: "비밀번호를 꼭 입력해주세요",
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "비밀번호가 일치하지 않습니다.";
                },
              },
            })}
            name="password2"
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            error={errors.password2?.message}
          />
          <Span>{errors.password2?.message}</Span>
        </FormColumn>

        <Button onClick={onSubmitValid} disabled={!formState.isValid}>
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
