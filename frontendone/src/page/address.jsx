import React from "react";
import { useNavigate } from "react-router-dom";
import * as i from "../style/styledaddress";

const Address = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goComplete = () => {
    navigate(`/complete`);
  };

  return (
    <i.Container>
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
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="42px"
          onClick={goMain}
        />
      </i.Header>

      <i.Border>
        <div></div>
      </i.Border>

      <i.Top>
        <span>배송지 입력하기</span>
      </i.Top>

      <i.Body>
        <i.Label>*주소</i.Label>
        <i.InputBlank>
            <input type="text" placeholder="주소를 입력해주세요."/>
        </i.InputBlank>

        <i.InputBlank>
            <input type="text" placeholder="상세주소를 입력해주세요."/>
        </i.InputBlank>

        <i.Label>*요청사항</i.Label>
        <i.InputBlank>
            <input type="text" placeholder="요청사항을 입력해주세요."/>
        </i.InputBlank>

        <i.Bottom>
        <i.BottomText>
          <img
            id="checkbox"
            alt="checkbox"
            src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
          />
          <div id="check">개인정보 수집 및 이용에 동의하십니까?</div>
        </i.BottomText>
      </i.Bottom>

      <i.Button onClick={goComplete}>
        <i.ButtonText>주문하기</i.ButtonText>
      </i.Button>
      </i.Body>

    </i.Container>
  );
};

export default Address;