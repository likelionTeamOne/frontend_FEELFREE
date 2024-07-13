import React from "react";
import { useNavigate } from "react-router-dom";
import * as a from "../style/styleddeliverya.jsx";

const Deliverya = () => {
  const navigate = useNavigate();

  const goDeliveryb = () => {
    navigate(`/deliveryb`);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <a.Container>
      <a.Header>
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
      </a.Header>

      <a.Border>
        <div></div>
      </a.Border>

      <a.Head>
        <img
          id="explain"
          src={`${process.env.PUBLIC_URL}/logo/explain1.svg`}
          alt="explain"
          width="235px"
          height="126px"
        />
      </a.Head>

      <a.Body>
        <a.ImageA>
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/migraine.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/stomachache.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/vomiting.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/diarrhea.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/chills.svg`}
            alt="box"
          />
        </a.ImageA>

        <a.ImageB>
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/over.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/stress.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/heartburn.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/backpain.svg`}
            alt="box"
          />
        </a.ImageB>
        <a.ImageC>
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/indigestion.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/lossapp.svg`}
            alt="box"
          />
          <img
            id="box"
            src={`${process.env.PUBLIC_URL}/logo/insomnia.svg`}
            alt="box"
          />
        </a.ImageC>
      </a.Body>

      <a.Button onClick={goDeliveryb}>
        <a.ButtonText>넘어가기</a.ButtonText>
      </a.Button>
    </a.Container>
  );
};

export default Deliverya;
