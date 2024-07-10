import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
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
  margin-right: 220px;
  }
`;

export const Text = styled.div`
  #ff {
    color: #000;
    font-family: "Gothic A1";
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  color: #000;
  text-align: left;
  font-family: "Gothic A1";
  font-size: 25px;
  font-weight: 500;
  line-height: normal;
  margin-top: -70px;
  margin-left: 130px;
`;

export const InsertA = styled.div`
  width: 333px;
  height: 66px;
  margin-left: 28px;
  margin-top: 35px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
  #Id {
    color: #000;
    text-align: left;
    margin-left: -10px;
    margin-top: 15px;
    font-family: "Gothic A1";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
  }
`;

export const InsertB = styled.div`
  width: 333px;
  height: 66px;
  margin-left: 28px;
  margin-top: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
  }
  #Pw {
    color: #000;
    text-align: left;
    margin-left: -10px;
    margin-top: 15px;
    font-family: "Gothic A1";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
  }
`;

export const LoginBox = styled.div`
  #LoginText {
    color: #000;
    margin-top: 5px;
    text-align: center;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  width: 150px;
  height: 39px;
  margin-left: 120px;
  margin-top: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #a7faf0;
`;

export const MembershipBox = styled.div`
  #MembershipText {
    color: #000;
    margin-top: 5px;
    text-align: center;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  width: 150px;
  height: 39px;
  margin-left: 120px;
  margin-top: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
`;
