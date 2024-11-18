import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Courseitem from './components/course/Courseitem';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';

// 파스칼 케이스를 사용해야 된다. (첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return (
    <button>Counter</button>
  )
}


// 리액트에서 class 는 예약어라 사용 못하고
// class 대신 className 이라고 사용함
function App() {
  return (
    <div>
      {/* <Header />
      <Main />
      <Footer/> */}

      {/* <div className='card'>
        <div className='card__header'>강의 목록</div>
        <div className='card_body'>
          <div className='courses'>
            
            2단계
            <Courseitem />
            <Courseitem />
            <Courseitem /> 
           

          </div>
        </div>
      </div> */}
    
        {/* <Library /> */}
           <CourseListCard />

    </div>
  );
}

export default App;
