import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1000px;
  margin-top: 30px;
  background: white;
`;

export const Header = styled.div`
  #logo {
    display: absolute;
    margin-right: -330px;
    margin-top: 3px;
    cursor: pointer;
  }
`;

export const Border = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  padding-bottom: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 900px;
`;
export const InputBlank = styled.div`
  margin-top: 20px;
  margin-left: 26px;
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid black;
  border-radius: 10px;
  background: #FFF;
  input {
    border: 0px;
    outline: none;
    width: 273px;
    margin-top: 10px;
    margin-left: -40px;
    color: #b6b6b6;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 31px;
  width: 329.5px;
  border-bottom: 1px solid black;
  input {
    border: 0px;
    outline: none;
    width: 273px;
    margin-top: 10px;
    margin-left: -10px;
    color: #b6b6b6;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

`;

export const Input = styled.div`
  margin-top: 30px;
  margin-left: 27px;
  width: 340px;
  height: 317px;
  flex-shrink: 0;
  border: 1px solid black;
  border-radius: 10px;
  background: #FFF;
  input {
    border: 1px;
    outline: none;
    width: 273px;
    margin-top: 17px;
    margin-left: -50px;
    color: #b6b6b6;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Button = styled.div`
  margin-top: 50px;
  margin-left: 80px;
  width: 226px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fffba6;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #DADADA;
  }
`;

export const ButtonText = styled.div`
  margin-top: 15px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;