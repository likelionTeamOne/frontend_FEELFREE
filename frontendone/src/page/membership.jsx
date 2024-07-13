import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as s from "../style/styledmembership";

const Membership = () => {  
    const navigate = useNavigate();
    // formData에서 현재 입력값을 저장
    const [formData, setFormData] = useState({   //setFormData 상태 업데이트
        name: '',
        username: '',
        password: '',
        password_confirm: '',
        email: ''
    });

    const { name, username, password, password_confirm, email } = formData; //아이디 --> username의미

    // 입력 필드의 값에 따라 변경될 때 호출
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // 폼 제출시 호출
    const onSubmit = async e => {
        e.preventDefault();

        if (password !== password_confirm) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }

        // axios에 POST요청
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json' //데이터를 JSON형식으로 보냄
                }
            };
            const body = JSON.stringify(formData);
            const res = await axios.post('http://127.0.0.1:8000/user/', body, config);
            console.log('회원가입 성공:', res.data);
            navigate(-1); 
        } catch (err) {
            if (err.response && err.response.data) {
                if (err.response.data.username) {
                    alert("이미 사용 중인 사용자 이름입니다.");
                    console.error("Username 오류:", err.response.data.username);
                } else {
                    alert("회원가입 실패: " + JSON.stringify(err.response.data));
                    console.error("회원가입 실패:", err.response.data);
                }
            } else {
                alert("서버와의 통신 오류: " + err.message);
                console.error("서버와의 통신 오류:", err.message);
            }
        }
    };

    return (
        <s.Container>
            <s.Header>
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
                />
            </s.Header>

            <s.Border>
                <div></div>
            </s.Border>

            <s.Top>
                <span>회원가입</span>
            </s.Top>

            <s.Body>
                <div>
                    <form onSubmit={onSubmit}>
                        <s.Label>*이름</s.Label>
                        <s.InputBlank>
                            <input 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={onChange} 
                                placeholder="이름을 입력해주세요." 
                                required 
                            />
                        </s.InputBlank>

                        <s.Label>*아이디</s.Label>
                        <s.InputBlank>
                            <input 
                                type="text" 
                                name="username"
                                value={username} 
                                onChange={onChange} 
                                placeholder="아이디를 입력해주세요." 
                                required 
                            />
                        </s.InputBlank>

                        <s.Label>*비밀번호</s.Label>
                        <s.InputBlank>
                            <input 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={onChange} 
                                placeholder="비밀번호를 입력해주세요." 
                                required 
                            />
                        </s.InputBlank>

                        <s.Label>*비밀번호 확인하기</s.Label>
                        <s.InputBlank>
                            <input 
                                type="password" 
                                name="password_confirm" 
                                value={password_confirm} 
                                onChange={onChange} 
                                placeholder="비밀번호를 입력해주세요." 
                                required 
                            />
                        </s.InputBlank>

                        <s.Label>*Email</s.Label>
                        <s.InputBlank>
                            <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={onChange} 
                                placeholder="Email을 입력해주세요."
                                required 
                            />
                        </s.InputBlank>
                        
                        <s.Button type="submit">회원가입 완료하기</s.Button>
                    </form>
                </div>
            </s.Body>
        </s.Container>
    );
};

export default Membership;  