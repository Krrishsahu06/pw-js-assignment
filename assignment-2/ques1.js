users = ["Mithun","Krish","Axat","Divyansh","Mansi","Kriti"]
function userPresent(name) {
    if (users.includes(name)) {
        console.log(`Yes, ${name} is a valid user` );
    }else{
        console.log(`No, ${name} is not a valid user `);
    }
}

userPresent("Rishi")
userPresent("Krish")