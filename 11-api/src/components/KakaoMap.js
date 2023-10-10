import { useEffect } from "react";

const KakaoMap = () => {
  // var container = document.getElementById('map');
     const mapRef = useRef(null); //위에꺼대신 리액트버전으로 바꿈

     var options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3, //지도의 레벨(확대, 축소)
  };
  useEffect(() => {}
 
  var map = new kakao.maps.Map(container, options);

  return <div ref={mapRef} style={{width: "100%", height:"100vh"}}></div>;
};

export default KakaoMap;
