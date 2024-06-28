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
  }
`;

export const Border = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  padding-bottom: 5px;
`;

export const Top = styled.div`
  text-align: center;
  padding-top: 20px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  span {
    color: #000;
    font-family: "Gothic A1";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 900px;
`;

export const Label = styled.div`
  display: flex;
  margin-top: 15px;
  color: #666464;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
`;

export const InputBlank = styled.div`
  margin-top: 7px;
  margin-left: 18px;
  width: 356px;
  height: 66px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    outline: none;
    width: 273px;
    margin-top: 17px;
    margin-left: -50px;
    color: #b6b6b6;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 40px;
  width: 393px;
  height: 100px;
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #a7faf0;
  margin-bottom: 30px;
  #check {
    display: flex;
    position: absolute;
    margin-top: 22px;
    margin-left: 50px;
  }
  #checkbox {
    display: flex;
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
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
