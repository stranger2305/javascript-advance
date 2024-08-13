// const tinderUser = new Object() ==> singleton object
// const tinderUser = {}  ==> Non-singleton Object

const tinderUser = {};
tinderUser.name = "Albert Einstein";
tinderUser.id = "123abc";
tinderUser.age = 21;

console.log(tinderUser);


const regularUser = {
    email : "yashpowar1284@gmail.com",
    fullname : {
        userfullname : {
            firstname: "yash",
            lastname : "powar"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.lastname);


// 3
const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }

const obj3 = { obj1, obj2 }
const obj4 = Object.assign(obj1,obj2)
console.log(obj3);
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
