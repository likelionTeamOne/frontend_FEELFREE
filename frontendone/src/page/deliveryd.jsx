import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as d from "../style/styleddeliveryd.jsx";

const Deliveryd = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const goMain = () => {
    navigate(`/main`);
  };

  const goAddress = () => {
    navigate(`/address`);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0)
    setCount(count - 1);
  };

  return (
    <d.Container>
      <d.Header>
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
      </d.Header>

      <d.Border>
        <div></div>
      </d.Border>

      <d.Head>
        <img
          id="explain"
          src={`${process.env.PUBLIC_URL}/logo/explain4.svg`}
          alt="explain"
          width="393px"
          height="290px"
        />
      </d.Head>

      <d.Body>
        <d.Box>
          <img
            id="r"
            alt="number"
            src={`${process.env.PUBLIC_URL}/logo/round.svg`}
          ></img>
          <span id="num">1</span>
          <span> 매우 적음 :</span>
        </d.Box>

        <d.Box>
          <img
            id="r"
            alt="number"
            src={`${process.env.PUBLIC_URL}/logo/round.svg`}
          ></img>
          <span id="num">2</span>
          <span>적음 :</span>
        </d.Box>

        <d.Box>
          <img
            id="r"
            alt="number"
            src={`${process.env.PUBLIC_URL}/logo/round.svg`}
          ></img>
          <span id="num">3</span>
          <span>보통 :</span>
        </d.Box>

        <d.Box>
          <img
            id="r"
            alt="number"
            src={`${process.env.PUBLIC_URL}/logo/round.svg`}
          ></img>
          <span id="num">4</span>
          <span>많음 :</span>
        </d.Box>

        <d.Box>
          <img
            id="r"
            alt="number"
            src={`${process.env.PUBLIC_URL}/logo/round.svg`}
          ></img>
          <span id="num">5</span>
          <span>매우 많음 :</span>
        </d.Box>
        <d.Bottom>
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
            alt="logo"
            width="42px"
          />
          <br />
          <div id="d">세부 조정하기</div>
        </d.Bottom>

        <d.Main>
          <d.List>
            <span id="l1">팬티라이너</span>
            <img
              id="pbutton"
              src={`${process.env.PUBLIC_URL}/logo/minusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={decrement}
            />
            <span
              id="updatenum"
              style={{
                borderBottom: "1.5px solid black",
                display: "inline-block",
                padding: "0 25px",
              }}
            >
              {count}
            </span>
            <img
              id="mbutton"
              src={`${process.env.PUBLIC_URL}/logo/plusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={increment}
            />
          </d.List>
          <d.List>
            <span id="l1">소형 생리대</span>
            <img
              id="pbutton"
              src={`${process.env.PUBLIC_URL}/logo/minusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={decrement}
            />
            <span
              id="updatenum"
              style={{
                borderBottom: "1.5px solid black",
                display: "inline-block",
                padding: "0 25px",
              }}
            >
              {count}
            </span>
            <img
              id="mbutton"
              src={`${process.env.PUBLIC_URL}/logo/plusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={increment}
            />
          </d.List>
          <d.List>
            <span id="l1">중형 생리대</span>
            <img
              id="pbutton"
              src={`${process.env.PUBLIC_URL}/logo/minusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={decrement}
            />
            <span
              id="updatenum"
              style={{
                borderBottom: "1.5px solid black",
                display: "inline-block",
                padding: "0 25px",
              }}
            >
              {count}
            </span>
            <img
              id="mbutton"
              src={`${process.env.PUBLIC_URL}/logo/plusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={increment}
            />
          </d.List>
          <d.List>
            <span id="l1">대형 생리대</span>
            <img
              id="pbutton"
              src={`${process.env.PUBLIC_URL}/logo/minusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={decrement}
            />
            <span
              id="updatenum"
              style={{
                borderBottom: "1.5px solid black",
                display: "inline-block",
                padding: "0 25px",
              }}
            >
              {count}
            </span>
            <img
              id="mbutton"
              src={`${process.env.PUBLIC_URL}/logo/plusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={increment}
            />
          </d.List>
          <d.List>
            <span id="l1">오버나이트</span>
            <img
              id="pbutton"
              src={`${process.env.PUBLIC_URL}/logo/minusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={decrement}
            />
            <span
              id="updatenum"
              style={{
                borderBottom: "1.5px solid black",
                display: "inline-block",
                padding: "0 25px",
              }}
            >
              {count}
            </span>
            <img
              id="mbutton"
              src={`${process.env.PUBLIC_URL}/logo/plusbutton.svg`}
              alt="button"
              width="32px"
              height="32px"
              onClick={increment}
            />
          </d.List>
        </d.Main>
      </d.Body>
      <d.Button>
        <d.ButtonText onClick={goAddress}>배송지 입력하기</d.ButtonText>
      </d.Button>
    </d.Container>
  );
};

export default Deliveryd;
