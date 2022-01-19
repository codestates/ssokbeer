import styled from "styled-components";
/* eslint-disable */
import { useForm } from "react-hook-form";

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
  max-width: 320px;
`;
const FormColumn = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid #aaa2a2;
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  color: gray;
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
  &:hover {
    background-color: #ffdc77;
  }
  transition: 0.4s;
`;

const Signup = () => {
  const { register, watch, handleSubmit, errors, getValues } = useForm();
  const onSubmitValid = (data) => {
    // console.log(data);
  };
  const onSubmitInvalid = (data) => {
    // console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
        <FormColumn>
          <Label>이메일</Label>
          <Input
            ref={register({ required: "이메일을 꼭 입력해주세요." })}
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요'
          />
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
            name='password'
            type='password'
            placeholder='8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요'
          />
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
            name='password2'
            type='password'
            placeholder='비밀번호를 한번 더 입력해 주세요'
          />
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
                  return !isValid || "영어, 한글, 숫자만 입력해주세요";
                },
              },
              minLength: { value: 2, message: "최소 2자 이상 입력해주세요" },
              maxLength: { value: 8, message: "최대 8자 이하로 입력해주세요" },
            })}
            name='nickname'
            placeholder='2~8글자'
          />
        </FormColumn>
        <Button>가입하기</Button>
      </Form>
    </Container>
  );
};

export default Signup;
