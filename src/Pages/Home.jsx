// import React, { useState } from "react";
// import { fakeData } from "shared/DummyData";
// import { Link } from "react-router-dom";

// function Home() {
//   const [name, setName] = useState("카리나");

//   const [letters, setLetters] = useState([...fakeData]);

//   // console.log(letters);

//   const filteredLetters = letters.filter((data) => {
//     return data.writedTo === name;
//   });

//   // console.log("test", filteredLetters);

//   // localStorage.setItem(name, JSON.stringify(throwData));

//   return (
//     <>
//       <div>
//         <button
//           onClick={(e) => {
//             setName("카리나");
//           }}
//           style={{
//             backgroundColor: name === "카리나" ? "yellow" : "initial",
//           }}
//         >
//           카리나
//         </button>
//         <button
//           onClick={(e) => {
//             setName("지젤");
//           }}
//           style={{
//             backgroundColor: name === "지젤" ? "yellow" : "initial",
//           }}
//         >
//           지젤
//         </button>
//         <button
//           onClick={(e) => {
//             setName("윈터");
//           }}
//           style={{
//             backgroundColor: name === "윈터" ? "yellow" : "initial",
//           }}
//         >
//           윈터
//         </button>
//         <button
//           onClick={(e) => {
//             setName("닝닝");
//           }}
//           style={{
//             backgroundColor: name === "닝닝" ? "yellow" : "initial",
//           }}
//         >
//           닝닝
//         </button>
//       </div>

//       <Link to={`/detail`}>
//         <span style={{ cursor: "pointer" }}>➡️ Go to: </span>
//       </Link>
//     </>
//   );
// }

// export default Home;
