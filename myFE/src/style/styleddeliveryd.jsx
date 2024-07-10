import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1400px;
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

export const Head = styled.div`
  margin-top: 100px;
`;

export const Body = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 200px;
`;

export const Box = styled.div`
  margin-top: 15px;
  width: 362px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px dashed #000;
  background: #fff;
  #r {
    position: absolute;
    margin-left: -178px;
    margin-top: 8px;
  }
  span {
    position: absolute;
    margin-left: -145px;
    margin-top: 13px;
  }
  #num {
    position: absolute;
    margin-left: -169px;
    margin-top: 13px;
  }
`;

export const Bottom = styled.div`
  #ylogo {
    margin-top: 50px;
    margin-left: -30px;
  }
  #d {
    margin-top: 5px;
    margin-left: -25px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Main = styled.div`
  margin-top: 10px;
`;

export const List = styled.div`
  margin-top: 25px;
  margin-right: 20px;
  #l1 {
    position: absolute;
    font-size: 16px;
    margin-left: -60px;
    padding: 10px;
  }
  #updatenum {
  margin-left: 100px;
  }
  #pbutton {
    position: absolute;
    margin-top: 3px;
    margin-left: 65px;
    cursor: pointer;
  }
  #mbutton {
    position: absolute;
    margin-top: 3px;
    cursor: pointer;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 550px;
  margin-left: 85px;
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
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;
