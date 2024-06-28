import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as i from "../style/styledinfo";

const Info = () => {
  const navigate = useNavigate();

  const goUpdate = () => {
    navigate(`/update`);
  };

  return (
    <i.Container>
      <Helmet>
        <title>FEEL FREE</title>
      </Helmet>
      <i.Header>
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
      </i.Header>

      <i.Border>
        <div></div>
      </i.Border>

      <i.Title>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/logo.svg`}
          alt="logo"
          width="70px"
        />
      </i.Title>

      <i.Text>
        정보 수정을 위한 <br />
        본인 확인 절차입니다.
      </i.Text>

      <i.Label>*비밀번호</i.Label>
        <i.InputBlank>
            <input type="text" placeholder="비밀번호를 입력해주세요."/>
        </i.InputBlank>

      <i.Button onClick={goUpdate}>
        <i.ButtonText>정보 수정하기</i.ButtonText>
      </i.Button>

    </i.Container>
  );
};

export default Info;
