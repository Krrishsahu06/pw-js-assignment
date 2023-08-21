function reverseString(str) {
    let splitString = str.split("")
    let reverse = splitString.reverse()
    let newString = reverse.join("")
    console.log(`Reversed string is "${newString}"`);
}
reverseString("Hello")
reverseString("Krish")