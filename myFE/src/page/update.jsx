import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as u from '../style/styledupdate';

const Update = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 상태

  const goMain = () => {
    navigate(`/main`);
  };

  const handleUpdate = () => {
    setShowPopup(true); // 팝업 표시
  };

  const handleConfirm = () => {
    setShowPopup(false); // 팝업 닫기
    goMain(); // Main 페이지로 이동
  };

  return (
    <u.Container>
      <u.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="back button"
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            cursor: 'pointer',
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
      </u.Header>

      <u.Border>
        <div></div>
      </u.Border>

      <u.Top>
        <span>회원정보 수정하기</span>
      </u.Top>

      <u.Body>
        <u.Label>*이름</u.Label>
        <u.InputBlank>
          <input type="text" placeholder="이름을 입력해주세요." />
        </u.InputBlank>

        <u.Label>*아이디</u.Label>
        <u.InputBlank>
          <input type="text" placeholder="아이디를 입력해주세요." />
        </u.InputBlank>

        <u.Label>*비밀번호</u.Label>
        <u.InputBlank>
          <input type="text" placeholder="비밀번호를 입력해주세요." />
        </u.InputBlank>

        <u.Label>*비밀번호 확인하기</u.Label>
        <u.InputBlank>
          <input type="text" placeholder="비밀번호를 입력해주세요." />
        </u.InputBlank>

        <u.Label>*Email</u.Label>
        <u.InputBlank>
          <input type="text" placeholder="Email을 입력해주세요." />
        </u.InputBlank>

        <u.Bottom>
          <u.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            />
            <div id="check">개인정보 수집 및 이용에 동의하십니까?</div>
          </u.BottomText>
          <u.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            />
            <div id="check">서비스 이용 약관에 동의하십니까?</div>
          </u.BottomText>
        </u.Bottom>

        <u.Button onClick={handleUpdate}>
          <u.ButtonText>회원정보 수정하기</u.ButtonText>
        </u.Button>
      </u.Body>

      {showPopup && (
        <u.Popup>
          <u.PopupText>저장이 완료되었습니다!</u.PopupText>
          <u.ConfirmButton onClick={handleConfirm}>확인</u.ConfirmButton>
        </u.Popup>
      )}
    </u.Container>
  );
};

export default Update;
