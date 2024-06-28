import React from "react";
import { useNavigate } from "react-router-dom";
import * as f from "../style/styledchecka";

const Checka = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  const goTexta = () => {
    navigate(`/texta`);
  };

  return (
    <f.Container>
      <f.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="42px"
          onClick={goMain}
        />
      </f.Header>

      <f.Border>
        <div></div>
      </f.Border>

      <f.Top>
        <span>이런걸 고민이라고 </span>
      </f.Top>

      <f.SmallBox>#생리대정보</f.SmallBox>
      <f.SmallBoxx>#건강고민</f.SmallBoxx>

      <f.Body>
        <f.Input>
            <input type="text" placeholder="본문입니다."/>
        </f.Input>

      <f.Button onClick={goTexta}>
        <f.ButtonText>수정하기</f.ButtonText>
      </f.Button>
      <f.Buttonn onClick={goHome}>
        <f.ButtonText>삭제하기</f.ButtonText>
      </f.Buttonn>
      </f.Body>

    </f.Container>
  );
};

export default Checka;