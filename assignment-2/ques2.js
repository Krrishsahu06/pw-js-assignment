function calculateTotalCartValue() {
    let totalValue = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalValue+= arguments[i];
        
    }
    console.log(`The total value of cart is ${totalValue}`);
}

calculateTotalCartValue(20,10,50,20)