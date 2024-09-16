import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){

  let posts = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [thumbs, thumbsUp] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1, 2, 3].map(function(a) {
    console.log(a)
    return '123'
  });


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      
      <button onClick={function() {
        // (1)
        // 글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬 독학']);
        
        // (2)
        // 글제목[0] = '여자코트 추천';
        // 글제목변경(글제목)
        // 원본 데이터를 수정해버리면 원본 데이터를 쓰지 못함

        // (3)
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
        }}>글 수정</button>

      <button onClick={() => {
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>오름차순 정렬</button>

      <button onClick={() => {
        setModal(!modal);
      }}>모달창 생성</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a){
          return (
            <div className="list">
              <h4>{a}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>{글제목[i]}<span onClick={()=>{
                let copy = [...thumbs];
                copy[i] = copy[i] + 1;
                thumbsUp(copy);
              }}>👍</span> {thumbs[i]} </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                if(글제목[i]){
                  let copy = [...글제목];
                  copy.splice(i,1);
                  글제목변경(copy);
                }
              }}>삭제</button>
            </div>
          )
        })
      }

      <button onClick={() => setTitle(0)}>글제목0</button>
      <button onClick={() => setTitle(1)}>글제목1</button>
      <button onClick={() => setTitle(2)}>글제목2</button>

      {/* <input type='text' onMouseOut={(e) => {
        if(document.querySelector('#addTitle').addEventListener('click', function(){
          let copy = [...글제목];
          copy.splice(0,0,e.target.value);
          글제목변경(copy);
        }));
      }}></input>
      <button id='addTitle'>글 발행</button> */}

      <input type='text' onChange={(e) => {
        입력값변경(e.target.value);
      }}></input>
      <button onClick={() => {
        let copy = [...입력값]
        copy.unshift(입력값);
        입력값변경(copy);
      }}>글 발행</button>

      {/* <input type='' onChange={(e) => { 
        입력값변경(e.target.value);
        console.log(입력값);
      }}></input>
      <select></select>
      <textarea></textarea> */}

      {
        modal == true ? <Modal title={title} modal={modal} 글제목={글제목} 글제목변경={글제목변경} color={'yellow'} /> : null
        // modal == true ? <Modal 작명={~~~}/> : null 
      }

      {/* <Modal></Modal> */}
      {/* <Modal /> */}

      

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4> {props.글제목[props.title]} </h4>
      {/* <h4> {props.글제목[0]} </h4> */}
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy);      
      }}>글 수정</button>
    </div>
  )
}

export default App;
