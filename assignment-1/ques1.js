let totalValue = 2000
let discountPercentage = 20

function discountCalculator() {
    let discountAmount = (discountPercentage/100)*totalValue
    let finalPrice = totalValue-discountAmount
    console.log("The final price after discount is:", finalPrice); 
}

discountCalculator()