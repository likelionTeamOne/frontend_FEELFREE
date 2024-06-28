import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 500px;
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
  margin-bottom: 60px;
  border-bottom: 2px solid black;
  width: 100%;
  padding-bottom: 5px;
`;
export const Top = styled.div`
  padding-top: 13px;
  width: 330px;
  height: 50px;
  flex-shrink: 0;
  text-align: center;
  padding-left: 5px;
  margin-left: 30px;
  margin-bottom: -5px;
  color: #000;
  line-height: normal;
  background: var(--yellow, #fffba6);
  margin-top: 20px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Icon = styled.div`
  width: 371px;
  height: 130px;
  flex-shrink: 0;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: -5px;
  line-height: normal;
  border: 1px dashed #000;
  background: #FFF;
 #order{
 position: absolute;
 margin-left: -170px;
 margin-top: 17px;
 }
  #ondelivery{
 position: absolute;
 margin-left: -35px;
 margin-top: 17px;
 }
  #deliverycompleted{
 position: absolute;
 margin-left: 95px;
 margin-top: 17px;
 }
  #rswipe{
 position: absolute;
 margin-left: -80px;
 margin-top: 35px;
 }
  #rrswipe{
 position: absolute;
 margin-left: 50px;
 margin-top: 35px;
 }
}
`;

export const One = styled.div`
  #four {
    position: absolute;
    margin-left: -165px;
    margin-top: 100px;
  }
  #five {
    position: absolute;
    margin-left: -25px;
    margin-top: 100px;
  }
  #six {
    position: absolute;
    margin-left: 98px;
    margin-top: 100px;
  }
`;

export const Ordernumber = styled.div`
  width: 250px;
  height: 50px;
  flex-shrink: 0;
  text-align: left;
  padding-left: 5px;
  margin-top: 50px;
  margin-left: 30px;
  margin-bottom: -5px;
  background: #fff;
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Message = styled.div`
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  text-align: left;
  padding-left: 5px;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: -5px;
  background: #fff;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 300px;
`;

export const Button = styled.div`
  margin-top: 150px;
  margin-left: 80px;
  width: 226px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fffba6;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #dadada;
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