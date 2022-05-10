import React, { useState } from 'react';
import '../css/loginStyle.css';

class Login extends React.Component {
    constructor(){
        super();    //부르지 않으면 this가 초기화 안됨
        this.state = {
            id: '',
            pw: '',
            buttonChange: 'loginBtn',
        }
    }
}

const onChangeId = e => {
    this.setState({
        id: e.target.value    
    })
}

const onChangePw = e => {
    this.setState({
        pw: e.target.value
    })
}



export default function Login() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    
    const onChangePw = e => {
        setPw(e.target.value);
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
                    <button id="btn-login" 
                        onClick='' 
                        value='로그인'
                        type='submit'>로그인
                    </button>
                    <button id="btn-cancle" 
                        onClick={onReset} 
                        value='취소'>취소
                    </button>
                </div>
            </section>

        </>
    )
}