import React, { Component} from 'react';
import "../../css/deviceStyle.css"

//class가 아니라 함수로 다시 구현
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

//DB에 내용 전달
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

    //버튼 리셋 기능
    onReset = (e)=>{
        this.setState({
            //리셋기능 구현 필요
            d_id: "",
            u_name: "",
            u_birth: "",
            u_phone : "",
            u_addr : "",
            
        })
    }


    
    render() {
        return (
        <div>
            <h1 className="title">디바이스 정보 등록</h1>
            <p className="sub_title">사용자 디바이스 회원정보 등록</p>

            <section>
                {/* 유효성 검사도 넣어야 함 */}
                {/* 이미 등록된 시리얼 번호가 입력되면 차단해야 함 */}

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">시리얼 번호</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        id="d_id" onChange={this.handleChange} name="d_id" placeholder="A001"/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">성명</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        id="u_name" onChange={this.handleChange} name="u_name" placeholder="홍길동"/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">생년월일</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        id="u_birth" onChange={this.handleChange} name="u_birth" placeholder="990101"/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">휴대전화</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        id="u_phone" onChange={this.handleChange} name="u_phone" placeholder="01072210290"/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">주소</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        id="u_addr" onChange={this.handleChange} name="u_addr" placeholder="서울 특별시 강남구"/>
                </div>


                <button className="btn btn-primary" type="submit" value="Submit"
                    onClick={ this.onSubmit }>등록</button>

                <button class="btn btn-primary" type="reset" value="Reset"
                    onClick={ this.onReset }>취소</button>
            </section>
        </div>
        )
    }
    }

    
    

    






