import React from "react";
import { useNavigate } from "react-router-dom";
import * as k from "../style/styledcomment";

const Comment = () => {
  const navigate = useNavigate();

  const goCommenta = () => {
    navigate(`/commenta`);
  };

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <k.Container>
      <k.Header>
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
      </k.Header>

      <k.Border>
        <div></div>
      </k.Border>

      <k.Top>
        <span>이런걸 고민이라고 </span>
      </k.Top>

      <k.SmallBox>#생리대정보</k.SmallBox>
      <k.SmallBoxx>#건강고민</k.SmallBoxx>

      <k.Body>
        <k.Input>
            <input type="text" placeholder="본문입니다."/>
        </k.Input>

        <k.Comment>
            <input id="comment" type="text" placeholder="댓글을 입력해주세요."/>
            <img
              id="click"
              src={`${process.env.PUBLIC_URL}/logo/comment.svg`}                         
              alt="click"
              width="19px"
              height="19px"
              onClick={goCommenta}
            />
        </k.Comment>

      </k.Body>

    </k.Container>
  );
};

export default Comment;