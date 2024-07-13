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
          src={`${process.env.PUBLIC_URL}/logo/good.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/white.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/pure.svg`}
          alt="box"
        />
        </b.ImageA>

        <b.ImageB>
        <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/body.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/secret.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/herb.svg`}
          alt="box"
        />
        </b.ImageB>
        <b.ImageC>
        <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/organic.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/clear.svg`}
          alt="box"
        />
                <img
          id="box"
          src={`${process.env.PUBLIC_URL}/logo/dear.svg`}
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