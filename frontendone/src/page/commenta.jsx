import React from "react";
import { useNavigate } from "react-router-dom";
import * as j from "../style/styledcommenta";

const Commenta = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };
  
  return (
    <j.Container>
      <j.Header>
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
      </j.Header>

      <j.Border>
        <div></div>
      </j.Border>

      <j.Top>
        <span>이런걸 고민이라고 </span>
      </j.Top>

      <j.SmallBox>#생리대정보</j.SmallBox>
      <j.SmallBoxx>#건강고민</j.SmallBoxx>

      <j.Body>
        <j.Input>
            <input type="text" placeholder="본문입니다."/>
        </j.Input>

        <j.Mboxx>
          <j.NameBox>jerry0442</j.NameBox>
          <j.Title>그런 고민이 있으셨군요! 그럴땐 '가나다'브랜드의
            '마바사' 제품을 사용해보세요! 
            지인 추천으로 사용해보았는데 효과가 좋더라고요~</j.Title>
        </j.Mboxx>

        <j.Comment>
            <input id="comment" type="text" placeholder="댓글을 입력해주세요."/>
            <img
              id="click"
              src={`${process.env.PUBLIC_URL}/logo/comment.svg`}                         
              alt="click"
              width="19px"
              height="19px"
              onClick={goMain}
            />
        </j.Comment>

      </j.Body>

    </j.Container>
  );
};

export default Commenta;