import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 700px;
  margin-top: 30px;
  background: var(--yellow, #fffba6);
`;

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row; 
  margin-top: 20px;
  #head{
  display: flex;
  flex-direction: row;
  margin-left: 140px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    span {
    margin: 3px; 
    }
`;

export const Border = styled.div`
  border-bottom: 1.5px solid black;
  width: 100%;
  padding-bottom: 10px;
`;

export const Title = styled.div`
  #logo{
  margin-top: 150px;
  margin-right: 260px;
  }
`;

export const Text = styled.div`
  color: #000;
  text-align: left;
  font-family: "Gothic A1";
  font-size: 25px;
  font-weight: 500;
  line-height: normal;
  margin-top: -70px;
  margin-left: 100px;
`;

export const Label = styled.div`
  display: flex;
  margin-top: 40px;
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

export const Button = styled.div`
  margin-top: 50px;
  margin-left: 80px;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
  width: 226px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #a7faf0;
  cursor: pointer;
  &:hover {
    background-color: #DADADA;
  }
`;

export const ButtonText = styled.div`
  position: absolute;
  margin-top: 15px;
  margin-left: 65px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;