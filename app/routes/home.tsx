// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return <Welcome />;
// }

// src/App.jsx

// .tsx 파일 (TypeScript)이므로 React와 useState를 import 해주어야 합니다.
import React, { useState } from 'react';

// 파일 이름이 home.tsx이므로, 컴포넌트 이름을 Home으로 하고
// 이를 export default 해줍니다.
export default function Home() {
  
  // 1. 'schedules'라는 이름으로 스케줄 목록을 저장할 공간 (배열)
  // 2. 'inputValue'라는 이름으로 현재 입력창의 텍스트를 저장할 공간 (문자열)
// useState 옆에 <string[]>를 추가하여 타입을 명시합니다.
const [schedules, setSchedules] = useState<string[]>([]);
const [inputValue, setInputValue] = useState('');

  // 입력창의 내용이 바뀔 때마다 'inputValue'를 업데이트하는 함수
  // (e의 타입을 any로 두거나, 정확히는 React.ChangeEvent<HTMLInputElement>로 지정)
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  // '추가' 버튼을 눌렀을 때 실행되는 함수
  const handleAddSchedule = () => {
    // 입력창이 비어있지 않다면
    if (inputValue.trim() !== '') {
      // 기존 스케줄 목록(...)에 새 입력값(inputValue)을 추가
      setSchedules([...schedules, inputValue]);
      // 입력창을 다시 비웁니다.
      setInputValue('');
    }
  };

  // Enter 키를 눌러도 추가되도록 하는 함수
  // (e의 타입을 any로 두거나, React.KeyboardEvent<HTMLInputElement>로 지정)
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleAddSchedule();
    }
  };

  // 화면에 보여줄 HTML (JSX)
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h1>오늘의 스케줄 (Today's Schedule)</h1>
      
      {/* 스케줄 입력창 */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="새 스케줄을 입력하세요..."
        style={{ fontSize: '16px', padding: '8px' }}
      />
      
      {/* 추가 버튼 */}
      <button 
        onClick={handleAddSchedule}
        style={{ fontSize: '16px', padding: '8px', marginLeft: '10px' }}
      >
        추가
      </button>

      {/* 스케줄 목록을 보여줄 영역 */}
      <h2 style={{ marginTop: '30px' }}>스케줄 목록</h2>
      <ul>
        {/* schedules 배열을 순회하면서 각 항목(item)을 
          <li> 태그로 만들어줍니다.
        */}
        {schedules.map((item, index) => (
          <li key={index} style={{ fontSize: '18px', marginBottom: '10px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}