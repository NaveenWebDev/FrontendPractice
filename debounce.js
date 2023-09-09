// function debounce(func,delay){
//     let timeOutId;
//     return function(...args){
//         if(timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(() => {
//             func.call(this, ...args)
//         }, delay);
//     }
// }

// const input = document.querySelector("input");

// inputValue = (e)=>{
//     console.log(e.target.value)
// }
// returnVAlue = debounce(inputValue,500)
// input.addEventListener("input", returnVAlue )

// =========================practice=====================

// const inputValue = (e) => {
//   console.log(e.target.value);
// };
// function debounce(func, delay) {
//   let timeOutId;
//   return function (...args) {
//     clearTimeout(timeOutId);
//     timeOutId = setTimeout(() => {
//       func.call(this, ...args);
//     }, delay);
//   };
// }

// let findValue = debounce(inputValue, 500);

// input.addEventListener("input", findValue);

// =============================================nextdaypractice============================================

const input = document.querySelector("input");

function debounce(functio,delay){
  let clearid;
  return function(...args){
    clearInterval(clearid)
    clearid = setTimeout(() => {
      functio.call(this,...args)
    }, delay);
  }
}


const inputValue = (e)=>{
  console.log(e.target.value)
}
let mainValue = debounce(inputValue,500)

input.addEventListener("input", mainValue)