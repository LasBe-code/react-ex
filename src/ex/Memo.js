import React, {useMemo, useState } from 'react';

const Memo = () => {
    const [list, setList] = useState([1,2,3,4]);
    const [str,setStr] = useState("합계");
    const [num, setNum] = useState(10);

    const getAddResult = () => {
        let sum = 0;
        list.forEach((i) => (sum += i));
        console.log('sum 함수 실행됨 : ', sum);
        return sum;
    }

    // 기존 요소 저장 : 바뀌지 않는 부분 다시 렌더링하지 않도록 함
    const addResult = useMemo(() => getAddResult(), [list]);

    return (
        <div>
            <hr />
            <button onClick={() => {
               setList([...list, num]);
               setNum(num + 1);
            }}>
                리스트값 추가
            </button>
            <button onClick={() => str === "str2" ? setStr("str1") : setStr("str2")}>str 변경</button>
            <div>
                {list.map((i) => ( <h1>{i}</h1> ))}
            </div>
            <div>
                {str} : {addResult}
            </div>
        </div>
    );
};

export default Memo;