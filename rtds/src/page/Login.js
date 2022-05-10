import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/loginStyle.css';



export default function Login() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeId = e => {
        setId(e.target.value);
    }
    const onChangePw = e => {
        setPw(e.target.value);
    }

    const loginCheck = () => {
        console.log('login')
        if(id === ''){
            alert('아이디를 입력해주세요');
            return false;
        }else if(pw === ''){
            alert('비밀번호를 입력해주세요');
            return false;
        }else if(id !== 'emyo' || pw !== '1234'){
            alert('아이디 또는 비밀번호 오류!')
            return false;
        }else{
            alert('로그인 성공!');

        }
    }

    const onReset = () => {
        setId("");
        setPw("");
    }



    return (
        <>
            <div className='title'>
                <h1>Real-time Thermal Detection System</h1>
                <h4>실시간 열감지 시스템</h4>
            </div>
            <section>
                <h1>로그인을 해주세요</h1>
                <h4>please login to use this site</h4>

                <div class="form-floating">
                    <input class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                        type="text" value={ id } onChange={ onChangeId }/>
                    <label for="floatingTextarea">Id</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                        value={ pw } onChange={ onChangePw }/>
                    <label for="floatingPassword">Password</label>
                </div>

                <div className='btn-group v-center'>
                    <Link to="/home">
                        <button id="btn-login" 
                        onClick={loginCheck} 
                        value='로그인'
                        type='submit'>로그인
                        </button>
                    </Link>
                    <button id="btn-cancle" 
                        onClick={onReset} 
                        value='취소'>취소
                    </button>
                </div>
            </section>

        </>
    )
}