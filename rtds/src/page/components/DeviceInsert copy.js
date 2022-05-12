import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

export default class DeviceInsert extends Component{
    state = {
        d_id : "",
      }
    
      handleChange =(e)=>{
        this.setState({
          [e.target.name] : e.target.value,
        });
      }

    submitId = ()=>{
        const post ={
            test : this.state.d_id,
        };

        fetch("http://localhost:2999/device", {
            method : "post", // 통신방법
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(post),
        })
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                d_id : json.text,
            });
        });
    };
    
      render() {
        return (
          <div>
            <input onChange={this.handleChange} name ="d_id"/>
            <button onClick={this.submitId}>Submit</button>
            <h1>{this.state.id}</h1>
          </div>
        )
      }
    }

    
    

    



            {/* <h1>디바이스 등록</h1> */}
            {/* <p>회원정보 등록</p> */}

            {/* <section> */}

                {/* 유효성 검사도 넣어야 함 */}
                {/* 이미 등록된 시리얼 번호가 입력되면 차단해야 함 */}
                {/* <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">시리얼 번호</label>
                    <input type="text" class="form-control" id="d_id" placeholder="A001" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">이름</label>
                    <input type="text" class="form-control" id="u_name" placeholder="홍길동" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">생년월일</label>
                    <input type="text" class="form-control" id="u_birth" placeholder="010809" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">휴대전화</label>
                    <input type="text" class="form-control" id="u_phone" placeholder="010-7221-0290" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">주소</label>
                    <input type="text" class="form-control" id="u_addr" placeholder="경기도 고양시" />
                </div>
 
                <button className="btn btn-primary" type="submit" value="Submit">등록</button>
                <button class="btn btn-primary" type="reset" value="Reset">취소</button>


 */}
            {/* </section> */}
