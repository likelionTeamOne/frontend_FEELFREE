import React from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../style/styleddeliveryc.jsx";

const Deliveryc = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goDeliveryd = () => {
    navigate(`/deliveryd`);
  };

  return (
    <c.Container>
      <c.Header>
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
      </c.Header>

      <c.Border>
        <div></div>
      </c.Border>

      <c.Head>
      <img
          id="explain"
          src={`${process.env.PUBLIC_URL}/logo/explain3.svg`}
          alt="explain"
          width= "393px"
          height= "126px"
        />
      </c.Head>

      <c.Body>
        <c.ImageA>
        <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/좋은느낌.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/화이트.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/순수한면.svg`}
          alt="box"
        />
        </c.ImageA>

        <c.ImageB>
        <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/바디피트.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/시크릿데이.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/허브데이.svg`}
          alt="box"
        />
        </c.ImageB>
        <c.ImageC>
        <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/유기농본.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/깨끗한나라.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/디어스킨.svg`}
          alt="box"
        />
        </c.ImageC>
      </c.Body>

      <c.Button onClick={goDeliveryd}>
        <c.ButtonText>넘어가기</c.ButtonText>
      </c.Button>
    </c.Container>
  );
};

export default Deliveryc;
