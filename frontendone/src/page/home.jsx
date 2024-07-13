import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import * as h from "../style/styledhome";

const Home = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" }); // 상태변수(현재상태 화면 반영), 업데이트 함수(상태변수 업데이트) 정의

  const handleChange = (e) => { // 입력필드 입력시 호출
    const { id, value } = e.target; // 사용자가 입력필드에 글자 입력 --> e.target
    setCredentials({ ...credentials, [id]: value });
  };

  const handleSubmit = async () => { // 로그인 버튼 클릭 시 호출(비동기 함수 UI반응성 유지)
    try {
      const response = await axios.post('http://localhost:8000/rest-auth/login/', credentials);
      if (response.status === 200) {
        console.log("로그인 성공");
        navigate('/main');
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
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
          id="username"
          placeholder="ID"
          style={{ outline: "none" }}
          onChange={handleChange}
        ></input>
      </h.InsertA>
      <h.InsertB>
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          style={{ outline: "none" }}
          onChange={handleChange}
        ></input>
      </h.InsertB>

      <h.LoginBox onClick={handleSubmit}>
        <div id="LoginText" style={{ cursor: "pointer" }}>
          로그인
        </div>
      </h.LoginBox>

      <h.MembershipBox onClick={() => navigate(`/membership`)}>
        <div id="MembershipText" style={{ cursor: "pointer" }}>
          회원가입
        </div>
      </h.MembershipBox>
    </h.Container>
  );
};

export default Home;