import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [글제목,b] = useState('여자 코트 추천');
  let [글제목2,c] = useState('역삼 우동 맛집');
  let [글제목3,d] = useState('오늘의 띠별 운세');



  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목 }</h4>
        <p>3월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목2 }</h4>
        <p>3월 19일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목3 }</h4>
        <p>3월 20일 발행</p>
      </div>
    </div>
  );
}

export default App;

// class 넣을 땐 className
// 변수 넣을 땐 {변수명} = 데이터바인딩
// style 넣을 땐 style = {{이름:'값'}}
// State 사용법 : 1. import {useState} 2. useState(보관할 자료) 3. let[작명,작명] = useState(보관할 자료) > State는 자료 잠시 보관 변수 같은 느낌
// 변수가 있는데 State 왜 씀? : html 자동 재렌더링 so 바로바로 변환해줌 -> 변동시 자동으로 html에 반영되게 만들고 싶다면 State / 자주 변경될 거 같은 html 부분은 State 해두기
