import { useState, useRef, useEffect } from "react";
// import styled from 'styled-components';



const Victim = () => {
    return (
        <h1>1234</h1>
    )
//     const dotenv = require('dotenv');
//     dotenv.config();

//     const [kakaoMap, setKakaoMap] = useState(null);
//     const container = useRef(null);
    
//     const initMap = () => {
//       const center = new kakao.maps.LatLng(33.36256187769044, 126.52903781775196);
//       const options = {
//         center,
//         level: 8,
//       };
//       const map = new kakao.maps.Map(container.current, options);
//       setKakaoMap(map);
//     };
    
//     useEffect(() => {
//       initMap();
//     }, []);
    
//     return <MapContainer id="KakaoMap" ref={container} />;
//   }
  
//   const MapContainer = styled.div`
//     width: 100%;
//     height: 100vh;
//   `;

// export default function Victim() {

//     // const { lat, lon } = ( 33.450701, 126.570667 )
//     const { kakao } = window;
    
//     //지도 표시 함수
//     useEffect(() => {
//         const mapContainer = document.querySelector('.victim-map');
//         const mapOption = {
//             center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//             level: 3 // 지도의 확대 레벨
//         }
//         const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//         //마커 표시 위치
//         let position = new kakao.maps.LatLng(33.450701, 126.570667);

//         // 마커 생성
//         var marker = new kakao.maps.Marker({
//             map: map,
//             position: position,
//             clilckable: true    //마커 클릭시 지도의 클릭 이벤트가 발생하지 않음
//         });

//         //인포 윈도우 설명
//         var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//             iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

//         // 인포 윈도우 생성
//         var infowindow = new kakao.maps.InfoWindow({
//             content : iwContent,
//             removable : iwRemoveable
//         });
//         infowindow.open(map, marker);
//         // 지도의 중심을 결과값으로 받은 위치
//         map.setCenter(position)

//         //마커에 클릭 이벤트 등록
//         kakao.maps.event.addListener(marker, 'click', function(){
//             //사용자 정보 화면으로 이동하는 코드
//         })
//     })
//     return(
//         <>
//             <div className='victime-map'></div>
//             console.log(lat, lon);
//         </>
        
//     )
}
export default Victim;