// singleton objects

const mySym =Symbol("mykey1");

const Juser = {
    name: "yash powar",
    age : 21 , 
    [mySym] : "kkkk1",
    location : "Paymal Vasahat, Kolhapur",
    email : "yashpowar@gmail.com" ,
    isLogged : false,
    lastLogged : ["sangli", "satara"]
}

console.log(Juser.name);
console.log(Juser["name"]);
console.log(Juser.lastLogged);
console.log(Juser[mySym]);

Juser.email = "proxyproxy";
console.log(Juser.email);

Juser.email = "powarispower";
console.log(Juser.email);

Juser.greeting = function() {
    console.log("Hello JS user");
}
Juser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}` );
}
console.log(Juser.greeting());
console.log(Juser.greetingTwo());

console.log(Juser.greeting);