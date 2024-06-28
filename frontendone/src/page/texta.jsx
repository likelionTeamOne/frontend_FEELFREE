import React from "react";
import { useNavigate } from "react-router-dom";
import * as h from "../style/styledtexta.jsx";

const Texta = () => {
  const navigate = useNavigate();

  const goCheck = () => {
    navigate(`/check`);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <h.Container>
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
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="42px"
          onClick={goMain}
        />
      </h.Header>

      <h.Border>
        <div></div>
      </h.Border>

      <h.Body>
        <h.InputBlank>
            <input type="text" placeholder="제목을 입력해주세요."/>
        </h.InputBlank>

        <h.Tag>
        <input type="text" placeholder="#해시 태크 추가하기"/>
        </h.Tag>
            

        <h.Input>
            <input type="text" placeholder="내용을 입력해주세요."/>
        </h.Input>


      <h.Button onClick={goCheck}>
        <h.ButtonText>저장하기</h.ButtonText>
      </h.Button>
      </h.Body>

    </h.Container>
  );
};

export default Texta;