// if user input is unknown then you can define as unknown value type and you can assign any value type

let userInput : unknown;
let userName: string;

userInput = 5;
userInput ='Aj';

// you can reassign with specific varible assignement

// let userName = userInput

//you can do it by extra check placing to match previous data type
if(typeof userInput === 'string'){
  userName = userInput;
}

// never data type
// when function does not return nothing you can use never value to more specific 
function generateError(message:string,code:number): never{
  throw {message:message,errorCode:code};
}
