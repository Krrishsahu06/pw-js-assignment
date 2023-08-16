// let package = "standard";
let package = "express";
switch (package) {
    case "standard":
        console.log("Your package will be delivered in 3-5 days");
        break;
    
    case "express":
        console.log("Your package will be deliverd in 1-2 days");
        break;

    case "overnight":
        console.log("Your package will be deliverd next day");
    default:
        break;
}