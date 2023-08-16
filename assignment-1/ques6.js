let name = "Krish";
let email = "krishsahu601@gmail.com";
let age = "20";

if (typeof name !=="string") {
    console.log("Name should be string")   
}else if (typeof email !=="string") {
    console.log("Email should be string");
}else if (typeof age !=="number") {
    console.log("Age should be a number");
}else{
    console.log("You have been succcessfully identified")
}