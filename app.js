// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convert the given valueinDollar to yen
    let valueInYen = valueInDollar * 127.9;
    //return the yen value
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.8;
    // return the pound value
    return valueInPound;
}
const sum = (a,b) => {
    return a + b
}
console.log (sum(7,3))
module.exports = { sum , fromEuroToDollar , fromDollarToYen , fromYenToPound}
