import React from 'react';


// 인자, 매개변수 : props 
// function Book(props) {
//     return (
//         <div>
//             {/* `문자열 ${ }` */}
//             <h1>{` 이 책의 이름은 ${props.name}  입니다.`} </h1>
//             <h1>{` 이 책의 이름은 ${props.numOfPage}  입니다.`} </h1>
//         </div>
//     );
// }

// 구조 분해할당
function Book({name, numOfPage}) {
    return (
        <div>
            {/* `문자열 ${ }` */}
            <h1>{` 이 책의 이름은 ${name}  입니다.`} </h1>
            <h1>{` 이 책의 이름은 ${numOfPage}  입니다.`} </h1>
        </div>
    );
}

export default Book;

