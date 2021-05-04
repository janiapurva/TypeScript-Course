//object type intorduction
//define obejct by colon and {} which define as person as a object then you can define inside value as key value type.you can view all data type by just hovering over person object

// normal usage with object
const person = {
  name: "Apurva",
  age: 29,
  //array data type
  hobbies: ["Sports", "Cooking"],
  //Tuple data type  fixed length and fixed data type
  role:[2,'author']
};



//for Tuple data type 
const personTwo:{
  name: string;
  age:string;
  hobbies:string[];
  //Tuple data type with defining value with exact location. You can explicit define
  role:[number,string];
} = {
  name: "Apurva",
  age: 29,
  //array data type
  hobbies: ["Sports", "Cooking"],
  //Tuple data type  fixed length and fixed data type
  role:[2,'author']
}


console.log(person);

// you can intialize variable with defiening value and data type for array
let favouriteActivities: string[];
// assigning value to array .you get the error if you add mixed data type you can mixed data by any 
// let favouriteActivities: any[];
favouriteActivities = ['Sports']

for(const hobby of person.hobbies){
  //access inbuilt function when you define with data type
  console.log(hobby.toUpperCase());
}
