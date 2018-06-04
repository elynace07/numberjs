var one=prompt("Enter number here");
var two=prompt("Enter number here");
var three=prompt("Enter last number");

  var largest = '';
  if( one > two && one > three){
  
 largest= one; 
}else if (two> one && two> three){
  
  largest= two;
 
}else {
  largest = three;
}

console.log(largest + ' this is the largest number')

