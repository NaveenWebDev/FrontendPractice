// let todo = [];

// let req = prompt("please enter your request");

// while(true){

//     if(req == "quit"){
//         console.log("quitting App");
//         break;
//     }
    
//     if(req == "list"){
//         console.log("==========================")
//         for(let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("==========================")
//     }else if(req=="add"){
//         let task =  prompt("please enter the tast you want to add");
//         todo.push(task);
//         console.log("tast added");
//     }else if(req == "delete"){
//         let del = prompt("which tast you want to delete");
//         todo.splice(del, 1);
//         console.log("delete successfully");
//     }else{
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }

// ==================================random number guessing game========================================

const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the numer");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are win");
        break;
    }else{
        prompt("your guess was wrong. Please try again");
    }
}