import React from 'react';



function Event01(props) {
    // 사용자 정의 함수 (이벤트 핸들러)
    function heandleClick() {
        alert("눌렀네")
    }


    return (
        <>
            <button onClick={heandleClick}> Click me </button>
            <button onClick={function heandleClick2() {alert("눌렀네2") }}> 눌러주세요2 </button>
            <button onClick={() => {alert ("눌렀네3")}}> 눌러주세요3 </button>

        </>
    );
}


export default Event01;