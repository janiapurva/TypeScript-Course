//object type intorduction
//define obejct by colon and {} which define as person as a object then you can define inside value as key value type.you can view all data type by just hovering over person object
// normal usage with object
var person = {
    name: "Apurva",
    age: 29,
    //array data type
    hobbies: ["Sports", "Cooking"],
    //Tuple data type  fixed length and fixed data type
    role: [2, 'author']
};
//for Tuple data type 
var personTuple = {
    name: "Apurva",
    age: 29,
    //array data type
    hobbies: ["Sports", "Cooking"],
    //Tuple data type  fixed length and fixed data type
    role: [2, 'author']
};
//Enum data type ex. Enum{NEW,OLD}. You can assign value by any number and after all value it follow number or string
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "ABC";
})(Role || (Role = {}));
var personEnum = {
    name: "Apurva",
    age: 29,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(Role.ADMIN);
// you can intialize variable with defiening value and data type for array
var favouriteActivities;
// assigning value to array .you get the error if you add mixed data type you can mixed data by any 
// let favouriteActivities: any[];
favouriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //access inbuilt function when you define with data type
    console.log(hobby.toUpperCase());
}
