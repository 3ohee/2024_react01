import React from 'react';
import Courseitem from './Courseitem';

function CourseListCard(props) {
  return (
    <div className='card'>
      <div className='card__header'>강의 목록</div>
      <div className='card_body'>
        <div className='courses'>


          <Courseitem
            title='입문자를 위한, HTML&CSS 웹 개발 입문'
            description='웹 개발에 필요한 기본 지식을 배웁니다.'
            image='./img/coffee-blue.jpg'


          />
          <Courseitem
            title='초급자를 위한, HTML&CSS 웹 개발 입문'
            description='웹 개발에 필요한 기본 지식을 배웁니다.'
            image='./img/coffee-blue.jpg'


          />
          <Courseitem 
            title='중급자를 위한, HTML&CSS 웹 개발 입문'
            description='웹 개발에 필요한 기본 지식을 배웁니다.'
            image='./img/coffee-blue.jpg'

          />



        </div>
      </div>
    </div>
  );
}

export default CourseListCard;