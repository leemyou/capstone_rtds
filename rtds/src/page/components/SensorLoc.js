import React, { useEffect } from 'react';

// global kakao
import cn from "classnames";
const { kakao } = window;

export default function SensorLoc() {

    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        let map = new window.kakao.maps.Map(container, options);

        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {
            content: "<div>센서A</div>",
            latlng: new kakao.maps.LatLng(33.451393, 126.569940),
        },
        {
            content: "<div>센서B</div>",
            latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        },
        {
            content: "<div>센서C</div>",
            latlng: new kakao.maps.LatLng(33.450705, 126.569940),
        },
        {
            content: "<div>센서D</div>",
            latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        }
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

        // 다른 페이지로 이동하는 함수 써넣어야할듯?
        // var newpage = new ~~


        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker));

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

    // 마우스 클릭하면 영상 화면으로 이동하는 함수
    function makeClickListener(map, marker) {
        return function() {
            alert("센서 클릭!!")
        }
    }

        console.log("loding kakaoMap");

}, [])

    return (
        <>
            {/* <h1>산불 감지 현황</h1> */}
            {/* <p>산불 감지 현황을 지도로 표시해서 보여줌</p> */}

            <div className={cn("Map")} id='sensorMap'>
                <div className={cn("MapContainer")} id="map" style={{width:'82.5vw', height: '100vh'}}/>
            </div>
        </>
    )
}