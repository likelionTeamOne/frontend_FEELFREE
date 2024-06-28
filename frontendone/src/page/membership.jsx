import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/styledmembership";

const Membership = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };

  return (
    <s.Container>
      <s.Header>
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
        />
      </s.Header>

      <s.Border>
        <div></div>
      </s.Border>

      <s.Top>
        <span>회원가입</span>
      </s.Top>

      <s.Body>
        <s.Label>*이름</s.Label>
        <s.InputBlank>
            <input type="text" placeholder="이름을 입력해주세요."/>
        </s.InputBlank>

        <s.Label>*아이디</s.Label>
        <s.InputBlank>
            <input type="text" placeholder="아이디를 입력해주세요."/>
        </s.InputBlank>

        <s.Label>*비밀번호</s.Label>
        <s.InputBlank>
            <input type="text" placeholder="비밀번호를 입력해주세요."/>
        </s.InputBlank>

        <s.Label>*비밀번호 확인하기</s.Label>
        <s.InputBlank>
            <input type="text" placeholder="비밀번호를 입력해주세요."/>
        </s.InputBlank>

        <s.Label>*Email</s.Label>
        <s.InputBlank>
            <input type="text" placeholder="Email을 입력해주세요."/>
        </s.InputBlank>

        <s.Bottom>
        <s.BottomText>
          <img
            id="checkbox"
            alt="checkbox"
            src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
          />
          <div id="check">개인정보 수집 및 이용에 동의하십니까?</div>
        </s.BottomText>
        <s.BottomText>
          <img
            id="checkbox"
            alt="checkbox"
            src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
          ></img>
          <div id="check">서비스 이용 약관에 동의하십니까?</div>
        </s.BottomText>
      </s.Bottom>

      <s.Button onClick={goHome}>
        <s.ButtonText>회원가입 완료하기</s.ButtonText>
      </s.Button>
      </s.Body>

    </s.Container>
  );
};

export default Membership;
