import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as h from "../style/styledhome";

const Home = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goMembership = () => {
    navigate(`/membership`);
  };

  return (
    <h.Container>
      <Helmet>
        <title>FEEL FREE</title>
      </Helmet>
      <h.Header>
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
        <text id="head">
          <span>FEEL</span>
          <span>FREE</span>
        </text>
      </h.Header>

      <h.Border>
        <div></div>
      </h.Border>

      <h.Title>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/logo.svg`}
          alt="logo"
          width="70px"
        />
      </h.Title>

      <h.Text>
        안녕하세요. <br />
        <span id="ff">FEELFREE</span> 입니다.
      </h.Text>

      <h.InsertA>
        <input
          type="text"
          id="Id"
          placeholder="ID"
          style={{ outline: "none" }}
        ></input>
      </h.InsertA>
      <h.InsertB>
        <input
          type="text"
          id="Pw"
          placeholder="PASSWORD"
          style={{ outline: "none" }}
        ></input>
      </h.InsertB>

      <h.LoginBox onClick={goMain}>
        <div id="LoginText" style={{ cursor: "pointer" }}>
          로그인
        </div>
      </h.LoginBox>

      <h.MembershipBox onClick={goMembership}>
        <div id="MembershipText" style={{ cursor: "pointer" }}>
          회원가입
        </div>
      </h.MembershipBox>
    </h.Container>
  );
};
//1//
//2//
//3//
//4//
//5//
export default Home;
