// array = [1,2,3,4,5, "foo","bar", true, 2.51]

// obj = {
//     first_name: "Foo",
//     last_name: "Bar",
//     age:23,
//     status:true
// }

// console.log(array(5))
// console.log(obj["first_name"])
// console.log(obj.last_name)

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
    
// }

// for(var i of array) {
//     console.log(i)
// }

// for (var key of obj){
//     console.log(key)
// }

// for (var key in obj) {
//     console.log(key = ": " + obj[key])
// }

// var i = 0
// while (i > 10) {
//     console.log(i)
//     i++
// }


// do {
//     console.log(i)
// }while (i < 10);

// var x = 890

// if (x < 90) {
//     console.log("Si es mayou")
// } else {
//     console.log("No es mayor")

// }

// var animal = "Kitty"

// if(animal == "Kitty"){
// console.log("It is a pretty kitty")
// }else{
// console.log("Is not a pretty kitty")
// }


// var cat = (animal === "Kitty") ? console.log("It is a pretty Kitty") : console.log("Is not a pretty Kitty")

// switch (animal) {
//     case "Kitty":
//         console.log("Case One")
//         break;
//     case "Puppy":
//         console.log("Case Two")
//         break;
//     default:
//         console.log("Other wise")
//         break;
// }

// function prism(l) {
//     return function (w) {
//         return function (h) {
//             return l * w * h
//         }
//     }
// }

// console.log(prism(89)(54)(5))

// const foo = 3(function () {
//     console.log("I am the IIFE")
// }());

// var message = "Hello worl"
// const f3oo = (function (msg) {
//     console.log("I am the IIFE" + msg);
//     return msg;
// }(message));

// console.log(f3oo)


// function prism(l,w,h){
//     return l * w * h ;
// }

// console.log(prism(2,5,5))

// var sumTwoNumbers = function sum (a, b){
//     return a + b;
// }

// console.log(sumTwoNumbers(2,8))

//--LAS VARIABLES ASI CON PRIVADAS, UNICAMENTE SE PUEDE ACCEDER ATRAVES DE LA VARIABLE QUE SE DEFINE.




// foo();
// var foo = function (){
//     console.log("bar");
// }

//esta funcionando  porque esta dentro del mismo scope
//primero va a buscar el nombre de la funcion
// var say = function say(times) {
//     if (times > 0){
//         console.log("Hello")
//     say(times - 1)
//     }
// }

// var saysay = say
// say = "Opps"
// saysay(100)


// function PersonSay(person, ...msg){
//     msg.forEach(arg => {
//         console.log(person + " say: "+ arg)
//     })
// }

// PersonSay("Fco", "pepe", "Jose", "Madero", "perro")

// var url = 'http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript';

// var responseData = fetch(url).then(response => response.json());

// responseData.then(({items, has_more,quota_mas, quota_remaining}) => (
//     console.log("Quota Max: " + quota_max + "\n")
//     for (const {title, question_id, owner} of items){
//         console.log(question_id + "title: " + title + " user:"
//             + owner.display_name)
//     }
// ))

var url = "https://jsonplaceholder.typicode.com/users";

// fetch().then(response => response.json())
//     .then(response => (
//         response.forEach(element => (
//             console.log("user: " + element.username
//             + " City: " + element.adress.city)
//         ))
//     ))

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         username: "foo",
//         email: "foo@foo.cm"
//     })
// }).then(response => response.json())
//     .then(response => console.log(response))

fetch(url).then(response => response.json())
    .then(response =>{
        response.forEach(element => {
            console.log("\nuser: " + element.userId + "\nID: " + element.id + "\ntitle: " + element.title)
        });
    })

fetch(url, {
    method: "POST",
    headers: {
        "Content_type":"application/json"
    },
    body: JSON.stringify({
        userID: 2,
        title: "Lorem Ipsum ETC ETC"
    })
}).then(response => response.json())
    .then(response => console.log(response))