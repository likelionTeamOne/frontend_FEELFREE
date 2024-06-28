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
  margin-top: 30px;
  width: 393px;
  height: 900px;
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

export const Input = styled.div`
  margin-top: 5px;
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

export const Mboxx = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-left: 27px;
  width: 340px;
  height: 83px;
  padding-top: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  border-radius: 10px;
  border: 0.3px solid #000;
  background: rgba(167, 250, 240, 0.15);
`;

export const Title = styled.div`
  margin-top: 5px;
  width: 322px;
  color: #000;
  text-align: left;
  position: relative;
  left: 10px;
  font-family: "Gothic A1";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NameBox = styled.div`
  display: flex;
  margin-top: 0px;
  margin-left: 15px;
  padding-left: 10px;
  width: 61px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 0.3px solid #000;
  background: #FFF;
  font-size: 13px;
`;

export const Comment = styled.div`
  margin-top: 150px;
  margin-left: 30px;
  width: 340px;
  height: 29px;
  flex-shrink: 0;
  border: 0.3px solid black;
  border-radius: 10px;
  background: #fff;
  input {
    border: 1px;
    outline: none;
    width: 273px;
    margin-top: 3px;
    margin-right: 300px;
    color: #b6b6b6;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #comment {
    margin-left: 10px;
  }
  #click {
    position: absolute;
    margin-top: -19px;
    margin-bottom: 10px;
    margin-left: 145px;
    cursor: pointer;
  }
`;