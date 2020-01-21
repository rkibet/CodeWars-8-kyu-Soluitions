// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

///////////// Solution //////////////

function calculateTip(amount, rating) {
    var object = {
      terrible: 0,
      poor : 5,
      good : 10,
      great : 15,
      excellent: 20
    } 
    console.log(amount,rating)
    if(object[rating.toLowerCase()] === undefined){return "Rating not recognised"}
    
    return Math.ceil((amount/100)*object[rating.toLowerCase()]);
   }





