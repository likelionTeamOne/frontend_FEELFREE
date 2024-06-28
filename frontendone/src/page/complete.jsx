import React from "react";
import { useNavigate } from "react-router-dom";
import * as l from "../style/styledcomplete";

const Complete = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <l.Container>
      <l.Header>
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
      </l.Header>

      <l.Border>
        <div></div>
      </l.Border>

      <l.Top>
        주문이 완료되었습니다!
      </l.Top>

      <l.Icon>
        <img
          id="order"
          src={`${process.env.PUBLIC_URL}/logo/order.svg`}
          alt="order"
          width="71px"
          height="63px"
        />

        <img
          id="rswipe"
          src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}
          alt="rwipe"
          width="24px"
          height="24px"
        />
        <img
          id="ondelivery"
          src={`${process.env.PUBLIC_URL}/logo/ondelivery.svg`}
          alt="ondelivery"
          width="71px"
          height="63px"
        />

        <img
          id="rrswipe"
          src={`${process.env.PUBLIC_URL}/logo/rswipe.svg`}
          alt="rwipe"
          width="24px"
          height="24px"
        />

        <img
          id="deliverycompleted"
          src={`${process.env.PUBLIC_URL}/logo/deliverycompleted.svg`}
          alt="deliverycompleted"
          width="71px"
          height="63px"
        />
      <l.One>
        <span id="four"> 주문완료 </span>
        <span id="five"> 배송중 </span>
        <span id="six"> 배송 완료 </span>
      </l.One>
      </l.Icon>

      <l.Ordernumber>
        주문번호: 1234-56-78910
        <br />
        상품명 : FEELFREE 정기구독 서비스
      </l.Ordernumber>

      <l.Message>
        상품을 구매해주셔서 감사합니다.
        <br />
        빠른 시일내로 배송 도와드리겠습니다.
      </l.Message>

      <l.Body>
        <l.Button onClick={goMain}>
          <l.ButtonText>메인 페이지로 이동</l.ButtonText>
        </l.Button>
      </l.Body>
    </l.Container>
  );
};

export default Complete;
