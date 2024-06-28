import React from "react";
import { useNavigate } from "react-router-dom";
import * as t from "../style/styledtext";

const Text = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <t.Container>
      <t.Header>
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
      </t.Header>

      <t.Border>
        <div></div>
      </t.Border>

      <t.Body>
        <t.InputBlank>
            <input type="text" placeholder="제목을 입력해주세요."/>
        </t.InputBlank>

        <t.Tag>
        <input type="text" placeholder="#해시 태크 추가하기"/>
        </t.Tag>
            

        <t.Input>
            <input type="text" placeholder="내용을 입력해주세요."/>
        </t.Input>


      <t.Button onClick={goHome}>
        <t.ButtonText>등록하기</t.ButtonText>
      </t.Button>
      </t.Body>

    </t.Container>
  );
};

export default Text;