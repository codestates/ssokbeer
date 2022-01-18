import styled from "styled-components";

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

const Signup = () => (
  <Container>
    <Form>
      <FormColumn>
        <Label>이메일</Label>
        <Input placeholder="이메일을 입력해주세요" />
      </FormColumn>
      <FormColumn>
        <Label>비밀번호</Label>
        <Input placeholder="8자이상 / 영문 / 숫자를 조합해주세요" />
      </FormColumn>
      <FormColumn>
        <Label>비밀번호 확인</Label>
        <Input placeholder="비밀번호를 한번 더 입력해 주세요" />
      </FormColumn>
      <FormColumn>
        <Label>닉네임</Label>
        <Input placeholder="2~10글자" />
      </FormColumn>
      <Button>가입하기</Button>
    </Form>
  </Container>
);

export default Signup;
