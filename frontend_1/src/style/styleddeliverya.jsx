import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
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
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 200px;
  background: #f5f5f5;
`;

export const ImageA = styled.div`
  padding-top: 3px;
  #box {
    cursor: pointer;
  }
  img {
    margin: 7px;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ImageB = styled.div`
  #box {
    cursor: pointer;
  }
  img {
    margin: 7px;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ImageC = styled.div`
  #box {
    cursor: pointer;
  }
  img {
    margin: 7px;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
