import React from 'react';

import axios from 'axios';
import { useState, useEffect } from "react";
//css
import styles from '../../css/victimMap.module.css'

// global kakao
import cn from "classnames";
const { kakao } = window;






const Victim = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [lati, setLati] = useState(37.448284241644025);
    const [long, setLong] = useState(126.65734050676225);
    const [uName, setUName] = useState("NULL");


    // 버튼을 누름 -> click 상태 바뀜
    const clickedToggle = () => {
        setIsChecked((prev) => !prev)
    }

    useEffect(() => {
        var startInterval = setInterval(function() { 
            if (isChecked) {
                axios.get('http://localhost:2999/victim')
                    .then(response => {
                        setLati(response.data[0].latF)
                        setLong(response.data[0].longF)
                        setUName(response.data[0].u_name)
                        if(response.data[0] = null){
                            // alert("데이터가 없습니다")
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else{
                console.log("정지");
                clearInterval(startInterval);
            }

            
        }, 1000);
        
        return () => clearInterval(startInterval);
    }, [isChecked])



    // 지도 API
    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new window.kakao.maps.LatLng(lati, long),
            level: 3,
        };
        let map = new window.kakao.maps.Map(container, options);

        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {
            content: `<div>${uName}</div>`,
            latlng: new kakao.maps.LatLng(lati, long),
        },
    ]
    // ,selectedMarker = null;

    for (var i = 0; i < positions.length; i++) {
    // 마커를 생성하고 지도위에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng
        });

        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content
        })

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }


    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

    console.log("loding kakaoMap");

}, [])









    return (
        <>
            {/* <h1>조난자 위치 조회</h1> */}
            {/* <p>gps로 조난자의 현재 위치 표시 가능</p> */}
            <div class={`form-check form-switch ${styles.btn_toggle_wrap}`} style={{position:'absolute', zIndex:10, }}>
                {/* <label class="form-check-label" for="flexSwitchCheckDefault">사용자 위치 공유</label> */}
                <input className={`form-check-input ${styles.btn_toggle}`} type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    // onChange={ clickedToggle } 
                    checked={ isChecked } onClick = {clickedToggle}
                />
            </div>

            {/* <h4>토글 스위치: {isChecked ? "ON" : "OFF"}</h4> */}

            <h3 style={{position:'absolute', zIndex:10, top: 10, left: 450}}>현재 위도: { lati }</h3><br/>
            <h3 style={{position:'absolute', zIndex:10, top: 10, right: 100}}>현재 경도: { long }</h3>

            <div className={cn("Map")}>
                <div className={cn("MapContainer")} id="map" style={{width:'86vw', height: '100vh', position:'absolute', top:0, zIndex:1}}/>
            </div>

        </>
    )
}
export default Victim;


