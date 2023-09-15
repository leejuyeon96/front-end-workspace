// import Counter from "./Counter";
import { useState, useEffect } from "react";
// 데이터와 관련된 건 state를 쓰는 거고
// 값을 변경하려면 setxxx을 사용하여
// 중괄호 안에 쓰면 변수를 그대로 쓸 수 있음
const Converter = () => {
  const [number, setNumber] = useState("");
  // const[hour, setHours] = useState("");
  const [bool, setBool] = useState(true);
  const [text, setText] = useState("Invert");
  const change = (event) => {
    console.log(event.target.value);
    // const minutesValue = event.target.value;
    setNumber(event.target.value);
    // setMinutes(minutesValue);
    // setHours(Math.floor(minutesValue / 60));
  };
  const reset = () => {
    setNumber("");
  };
  const changeInvert = () => {
    //  setBool(false); 이건 한 번만
    setBool(!bool);
    reset();
  };
  useEffect(() => {
    if (bool) setText("Invert");
    else setText("Turn Back");
  }, [bool]);
  return (
    // 맨 위에 묶는 태그가 하나 있어야해 div대신 <></>도 가능
    <>
      <h1 style={{ color: "olivedrab" }}>Time Converter</h1>
      <div>
        <label>Minutes</label>
        <input
          type="number"
          placeholder="Minutes"
          onChange={change}
          disabled={!bool}
          value={bool ? number : Math.floor(number * 60)}
        />
      </div>
      <div>
        <label>Hours </label>
        <input
          type="text"
          placeholder="Hours"
          onChange={change}
          disabled={bool}
          value={bool ? Math.floor(number / 60) : number}
        />
      </div>
      {/* 
            <button
             style={{
                backgroundColor:"tomato",
                color:"white",
                padding: "10px 20px",
                border : "none",
                borderRadius:"10px"
                }}
                onClick={reset}
            >
                Reset
            </button>
            */}
      {/* 하위 컴포넌트로 전달 */}
      <Btn click={reset} btnText="Reset" backgroundColor="tomato" />
      <Btn click={changeInvert} btnText={text} backgroundColor="skyblue" />
    </>
  );
};
const Btn = ({ click, btnText, backgroundColor }) => {
  return (
    <button
      style={{
        backgroundColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
      }}
      onClick={click}
    >
      {btnText}
    </button>
  );
};
export default Converter;
