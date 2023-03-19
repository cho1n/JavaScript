/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [글제목,b] = useState(['역삼 우동 맛집', '오늘의 띠별 운세']);
  let [바뀔제목, 바꾸는함수] = useState('여자 코트 추천');
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);
  let [따봉3, 따봉변경3] = useState(0);
  let [변경, 멘트변경] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>재원 Offical</h4>
      </div>
      <div className='list'>
        <h4>{ 바뀔제목 } <span onClick={ () => { 따봉변경1( 따봉1 + 1 ) } }>👍</span> { 따봉1 }</h4>
        <p>3월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경2( 따봉2 + 1 ) } }>👍</span> { 따봉2 } </h4>
        <p>3월 19일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={ () => { 따봉변경3( 따봉3 + 1 ) } }>👍</span> { 따봉3 }  </h4>
        <p>3월 20일 발행</p>
      </div>
    <span onClick={ () => { 바꾸는함수('남자 코트 추천') } }>🔁</span> { ' ' } 
    </div>
  );
}

export default App;

// class 넣을 땐 className
// 변수 넣을 땐 {변수명} = 데이터바인딩
// style 넣을 땐 style = {{이름:'값'}}
// State 사용법 : 1. import {useState} 2. useState(보관할 자료) 3. let[작명,작명] = useState(보관할 자료) > State는 자료 잠시 보관 변수 같은 느낌
// 변수가 있는데 State 왜 씀? : html 자동 재렌더링 so 바로바로 변환해줌 -> 변동시 자동으로 html에 반영되게 만들고 싶다면 State / 자주 변경될 거 같은 html 부분은 State 해두기
// onClick 쓰는 법 => onClick={} 안에 함수 넣어야 함
// State 변경은 변경함수 쓰기 => state변경함수(새로운state)