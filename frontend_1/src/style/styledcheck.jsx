import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1481px;
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

export const Top = styled.div`
  text-align: left;
  padding-left: 25px;
  margin-top: 50px;
  margin-bottom: -5px;
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
    font-weight: 600;
    line-height: normal;
  }
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 393px;
  height: 300px;
  background: #a7faf0;
`;

export const Title = styled.div`
  color: #000;
  text-align: left;
  position: relative;
  left: 18px;
  font-family: "Gothic A1";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Detaill = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 500px;
  margin-top: 0px;
  background: white;
  span {
    position: absolute;
    display: inline-block;
    left: 5px;
    top: 10px;
    padding-right: 10px;
    width: 264px;
    color: #000;
    padding-left: 10px;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

export const Mboxx = styled.div`
  display: inline-block;
  margin-top: 50px;
  margin-bottom: -30px;
  width: 340px;
  height: 80px;
  padding-top: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  cursor: pointer;
`;

export const SmallBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  padding-left: 10px;
  width: 90px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 0.5px solid #000;
  font-size: 13px;
`;

export const SmallBoxx = styled.div`
  display: flex;
  margin-top: -22px;
  margin-left: 130px;
  padding-left: 10px;
  width: 75px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 0.5px solid #000;
  font-size: 13px;
`;