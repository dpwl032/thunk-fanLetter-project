// import React from "react";
// import { fakeData } from "shared/DummyData";
// import styled from "styled-components";
// import { useRef } from "react";

// const StItemUl = styled.ul`
//   width: 800px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid black;
//   gap: 20px;
// `;

// const StItemLi = styled.li`
//   width: 560px;
//   height: 200px;
//   text-align: center;
//   border: 2px solid red;
//   border-radius: 15px;
// `;

// const LetterItems = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
// `;

// const ProfileImg = styled.div`
//   width: 30%;
// `;

// const LetterItem = styled.div`
//   width: 70%;
// `;

// //말줄임 표시 처리방법
// const LengthLimit = styled.p`
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;
// function Item(test) {
//   return (
//     <>
//       <StItemUl>
//         {fakeData.map((data) => {
//           return (
//             <StItemLi key={data.id}>
//               <LetterItems>
//                 <ProfileImg>이미지</ProfileImg>
//                 <LetterItem>
//                   <p> {data.nickname}</p>
//                   <br />
//                   <p>{data.createdAt}</p>
//                   <br />
//                   <LengthLimit>{data.content}</LengthLimit>
//                   <br />
//                 </LetterItem>
//               </LetterItems>
//             </StItemLi>
//           );
//         })}
//       </StItemUl>
//     </>
//   );
// }

// export default Item;
