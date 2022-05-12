import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

export default class DeviceInsert extends Component{

    state = { 
        d_id : "",
        u_name : "",
        u_birth : "",
        u_phone : "",
        u_addr : "",
    }


    // 현재 state를 바꿔줌
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        });
    }


    onSubmit = ()=>{
        const post ={
            d_id : this.state.d_id,
            u_name : this.state.u_name,
            u_birth : this.state.u_birth,
            u_phone : this.state.u_phone,
            u_addr : this.state.u_addr,
        };

        fetch("http://localhost:2999/device", {
            method : "post", // 통신방법
            headers : { "content-type" : "application/json", },
            body : JSON.stringify(post),
        })
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                d_id : json.text,
                u_name : json.text,
                u_birth : json.text,
                u_phone : json.text,
                u_addr : json.text,
            });
        });
    };


    
    render() {
        return (
        <>
            <h1>디바이스 등록</h1>
            <p>회원정보 등록</p>

            <section>
                {/* 유효성 검사도 넣어야 함 */}
                {/* 이미 등록된 시리얼 번호가 입력되면 차단해야 함 */}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">시리얼 번호</label>
                    <input type="text" class="form-control" id="d_id" placeholder="A001" 
                        onChange={this.handleChange} name="d_id" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">이름</label>
                    <input type="text" class="form-control" id="u_name" placeholder="홍길동"
                        onChange={ this.handleChange } name="u_name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">생년월일</label>
                    <input type="text" class="form-control" id="u_birth" placeholder="010809"
                        onChange={ this.handleChange } name="u_birth"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">휴대전화</label>
                    <input type="text" class="form-control" id="u_phone" placeholder="010-7221-0290"
                        onChange={ this.handleChange } name="u_phone" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">주소</label>
                    <input type="text" class="form-control" id="u_addr" placeholder="경기도 고양시"
                        onChange={ this.handleChange } name="u_addr"/>
                </div>


                <button className="btn btn-primary" type="submit" value="Submit"
                    onClick={ this.onSubmit }>등록</button>
                {/* reset기능 구현해야함 */}
                <button class="btn btn-primary" type="reset" value="Reset">취소</button>
            </section>
        </>
        )
    }
    }

    
    

    






