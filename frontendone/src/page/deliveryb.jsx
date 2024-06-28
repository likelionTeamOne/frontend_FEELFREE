import React from "react";
import { useNavigate } from "react-router-dom";
import * as b from "../style/styleddeliveryb.jsx";

const Deliveryb = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goDeliveryc = () => {
    navigate(`/deliveryc`);
  };

  return (
    <b.Container>
      <b.Header>
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
      </b.Header>

      <b.Border>
        <div></div>
      </b.Border>

      <b.Head>
      <img
          id="explain"
          src={`${process.env.PUBLIC_URL}/logo/explain2.svg`}
          alt="explain"
          width= "393px"
          height= "126px"
        />
      </b.Head>

      <b.Body>
        <b.ImageA>
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
        </b.ImageA>

        <b.ImageB>
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
        </b.ImageB>
        <b.ImageC>
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
        </b.ImageC>
      </b.Body>

      <b.Button onClick={goDeliveryc}>
        <b.ButtonText>넘어가기</b.ButtonText>
      </b.Button>
    </b.Container>
  );
};

export default Deliveryb;