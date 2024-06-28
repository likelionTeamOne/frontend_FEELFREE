import React from "react";
import { useNavigate } from "react-router-dom";
import * as g from "../style/styledcheck.jsx";

const Check = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goChecktwo = () => {
    navigate(`/checktwo`);
  };

  return (
    <g.Container>
      <g.Header>
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
      </g.Header>

      <g.Border>
        <div></div>
      </g.Border>

      <g.Top>
        <span>내가 쓴 글 :) </span>
      </g.Top>


      <g.Detaill>
        <g.Mboxx onClick={goChecktwo}>
          <g.Title>이런걸 고민이라고</g.Title>
          <g.SmallBox>#생리대정보</g.SmallBox>
          <g.SmallBoxx>#건강고민</g.SmallBoxx>
        </g.Mboxx>

        <g.Mboxx onClick={goChecktwo}>
          <g.Title>제목입니다.</g.Title>
          <g.SmallBox>#생리대정보</g.SmallBox>
          <g.SmallBoxx>#건강고민</g.SmallBoxx>
        </g.Mboxx>

        <g.Mboxx onClick={goChecktwo}>
          <g.Title>제목입니다.</g.Title>
          <g.SmallBox>#생리대정보</g.SmallBox>
          <g.SmallBoxx>#건강고민</g.SmallBoxx>
        </g.Mboxx>

      </g.Detaill>
    </g.Container>
  );
};

export default Check;