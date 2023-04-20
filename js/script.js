// window.alert('I am learning Web tech');
    
// document.write("hello");

// document.getElementById("rot").innerHTML = "Hehe Boy";

// console.log("hello cons msg");

// var x;
// x = prompt("Enter your name");

// console.log(x);

// document.write(x)

// let a = 5; 
// let b = 6;

// let c = a--;
// let d = --b;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a, b;

// a = 5;
// b = 4;

// var c = (a >= b);

// console.log((a>b) || (b<=a));

// var d = (1<4) ? "Hello":"world";
// console.log(d);

// var a = 12;
// var c = ++a;
// var b = a++;  

// console.log(c);
// console.log(b);

// var a = prompt("Enter temperture");
// var b = (9/5*a) + 32;

// console.log(a);
// console.log(b);


//There can be two things after the "."
//One is attribute poperty
//Another is method, where we have to give () brackets

// x = "Hello World!";
// console.log(x);

// y = x.length; //This is attribute or poperty or element or component
// console.log(y);

// z = x.toUpperCase(); //This is method
// console.log(z);

// a = x.slice(1, 4);
// console.log(a);

// b = x.slice(-5, -1);
// console.log(b);

// c = x.substr(3, 3);
// console.log(c);

// d = x.replace("ll", "kk");
// console.log(d);

// e = c.concat(x, "ABC", "123");
// console.log(e);

// var a;
// console.log(Boolean(a));

// var countries = ["BAN", "UK", "US"];
// console.log(countries);

// countries[countries.length] = "RSA";
// console.log(countries);

// countries.push("IRAN");
// console.log(countries);

// countries.shift();
// console.log(countries);

// countries.unshift("BAN");
// console.log(countries);

// var c = ["BAN", "UK", "US"];
// console.log(c);

// console.log(c.length);

// c[1] = "SA";
// console.log(c);

// var a = "I love my village";
// console.log(a);

// b = a.split(" ");
// console.log(b);


// c = b.toString();
// console.log(c);

// c2 = b.join(" ");
// console.log(c2);

// d = b.concat(c);
// console.log(d);

// d = c.concat(b);
// console.log(d);

// // e = b.sort();
// // console.log(e);

// f = b.reverse();
// console.log(f);

// var obj = {
//     name: "Sawon",
//     age: 26,
//     tittle: "Engineer",
// };

// obj["sch"] = "NSTU";

// delete obj.age;

// console.log(obj);

// var arr = [2, 3, ["q", ["w1", "w2"], "w"], 4, 5, 6];

// console.log(arr[2][1][0]);

// var arr = [2, 3, 4, ["a", "b"], {p1: "pp", p2: "ppp"}];

// console.log(arr);

// var obj = {
//     p1 : "a", 
//     p2 : "b",
//     p3 : [1, 2, 3],
// }

// console.log(obj);
// console.log(obj.p3[1])

//Pemptive Data type (num, str, bool)

// var a = 7;
// var b = a;

// a = 70;

// console.log(a);
// console.log(b);


//Refrence type

// var arr = [1, 2, 3];
// var arR = arr;

// arr[1] = 20;

// console.log(arr);
// console.log(arR);

// let a = {};
// console.log(a.name)

// var a = `F line
// s line`;
// console.log(a);

// var name = "Sawon"
// var age = 27;
// var deg = "Engineering"
// console.log(`His name is ${name}.
// He is is ${age}. 
// His deg is ${deg}.`);

// var sub1 = 87;
// var sub2 = 76;

// console.log(`Total is = ${sub1 + sub2}`);

// var a = prompt("Enter first num");
// var b = prompt("Enter sec num");
// var c = prompt("Enter thr num");

// a = parseInt(a);
// b = parseInt(b);
// c = parseInt(c);

// if (a>b){
//     if(a>c){
//         console.log(a + " is the largest");
//     }
//     else{
//         console.log(c + " is the largest");
//     }
// }
// else{
//     if(b>c){
//         console.log(b + " is the largest");
//     }
//     else{
//         console.log(c + " is the largest");
//     }
// }

console.log("Select: \n1. Add \n2. Sub \n3. Multi \n4. Divide");

var a = prompt("Enter first num");
var b = prompt("Enter sec num");
var c = prompt("Choose opt")
var r;

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

var d, e, f;
d = isNaN(a);
e = isNaN(b);
f = isNaN(c);

if (d || e || f){
    console.log("Invalid Input");
} 
else{
    switch(c){
        case 1:
            r = a+b
            break;
        case 2:
            r = a-b;
            break;
        case 3:
            r= a*b;
            break;
        case 4:
            r = a/b;
            break;
        default:
            r = "Wrong opt is given";
            break;
    }
}

console.log(r);
