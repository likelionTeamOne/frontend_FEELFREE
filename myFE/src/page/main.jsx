import React from "react";
import { useNavigate } from "react-router-dom";
import * as m from "../style/styledmain";

const Main = () => {
  const navigate = useNavigate();

  const goCheck = () => {
    navigate(`/check`);
  };

  const goText = () => {
    navigate(`/text`);
  };

  const goDeliverya = () => {
    navigate(`/deliverya`);
  };

  const goInfo = () => {
    navigate(`/info`);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  const goComment = () => {
    navigate(`/comment`);
  };

  return (
    <m.Container>
      <m.Header>
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
      </m.Header>

      <m.Border>
        <div></div>
      </m.Border>

      <m.Top>
        000님! <br />
        <span>고민을 공유해주세요 : )</span>
      </m.Top>

      <m.Body>
        <m.Yb>
          <img
            id="icon"
            alt="icon"
            src={`${process.env.PUBLIC_URL}/logo/icon.svg`}
            width="42px"
          />
        </m.Yb>
        <m.Box onClick={goCheck}>
          내가 쓴 글 확인하기
          <img id="rs" alt="swipe" src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}></img>
        </m.Box>

        <m.Box onClick={goText}>
          새로운 글 작성하기
          <img id="rs" alt="swipe" src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}></img>
        </m.Box>

        <m.Box onClick={goDeliverya}>
          정기배송 서비스 이용하기
          <img id="rs" alt="swipe" src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}></img>
        </m.Box>

        <m.Box onClick={goInfo}>
          회원정보 수정하기
          <img id="rs" alt="swipe" src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}></img>
        </m.Box>
      </m.Body>

      <m.Detail>
        <m.ImageA>
          <img alt="num" src={`${process.env.PUBLIC_URL}/logo/1.svg`}></img>
        </m.ImageA>
        <m.ImageB>
          <img alt="num" src={`${process.env.PUBLIC_URL}/logo/2.svg`}></img>
        </m.ImageB>
        <m.ImageC>
          <img alt="num" src={`${process.env.PUBLIC_URL}/logo/3.svg`}></img>
        </m.ImageC>

        <m.Mbox>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mbox>

        <m.Mbox>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mbox>

        <m.Mbox>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mbox>
      </m.Detail>

      <m.Detaill>
        <span className="st">🔥고민이 공유되고 있어요!</span>
        <m.Mboxx onClick={goComment}>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mboxx>

        <m.Mboxx onClick={goComment}>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mboxx>

        <m.Mboxx onClick={goComment}>
          <m.Title>제목입니다.</m.Title>
          <m.SmallBox>#생리대정보</m.SmallBox>
          <m.SmallBoxx>#건강고민</m.SmallBoxx>
        </m.Mboxx>

        <m.Bottom>
            <m.BottomText>새로운 글 확인하기</m.BottomText>
        </m.Bottom>
      </m.Detaill>
    </m.Container>
  );
};

export default Main;
