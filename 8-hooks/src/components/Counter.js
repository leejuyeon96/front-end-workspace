import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const plusCount = () => {
//     setCounter(counter + 1);
//   };
//   const minusCount = () => {
//     setCounter(counter - 1);
//   };
//   return (
//   <div>
//     <h1>Total clicks : {counter}</h1>
//     <button onClick = {plusCount}>+1</button>
//     <button onClick = {minusCount}>-1</button>
//   </div>
//   );
// };
const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};
// 상단 버튼 타입 지정
Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
//컴포넌트 경우 파일명과 일치시키는 경향...
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plusCount = () => {
    setCounter(counter + 1);
  };
  const minusCount = () => {
    setCounter(counter - 1);
  };
  //콘솔에 찍어보면 처음부터 끝까지 이벤트 실행될 때마다 찍혀
  console.log("always~~~ ");
  // 첫번째는 함수, 두 번째는 배열 형식
  // 배열 비워둠 : 처음 한 번만 호출하고 클릭시 안 찍힘
  // useEffect는 여러 개 사용 가능
  useEffect(() => {
    console.log("useEffect~~");
  }, []);
  //사용 예시: 댓글 달렸을 때 알림 띄우고 싶다!
  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);
  return (
    <div>
      <h1 style={{ backgroundColor: "pink", color: "skyblue" }}>
        Total clicks : {counter}
      </h1>
      <Button text="+1" click={plusCount} />
      <Button text="-1" click={minusCount} />
    </div>
  );
};
export default Counter;
