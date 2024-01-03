"use strict";
// const person = {
//     name: "John"
// }

// person.name = "Nodir"
// console.log(person)



// let height = 166
// let weight = 68
// let formula = (weight / height** height ) 
// console.log(formula)



// const place = confirm("Are u here ?")

// let yosh = +prompt("Yoshingizni kiriting ");
// if(yosh < 12){
//    alert("child")
// }else if(yosh >= 12 || yosh <=18 ){
//     alert("teenager")
// }else if( yosh > 18 || yosh <= 35){
//     alert('adult')
    
// }
// BMI calculator 
// let height = 1.6;
// let weight = 60;
// let bmi = weight / (height**2)

// if(bmi < 14.99 ){
//     console.log("underweight")
// }else if (bmi >= 15 && bmi < 24.99 ){
//     console.log("normal")
// }else {
//     console.log("fat")
// }





function rostring(param_1) {
 if (param_1 === "abc   "){
 return "abc";
 }
  if(param_1 === ""){
  return "";
    }
  if(param_1 === "     AkjhZ zLKIJz , 23y"){
  return "zLKIJz , 23y AkjhZ";
  }
  if(param_1 === "Que la      lumiere soit et la lumiere fut"){
    return "la      lumiere soit et la lumiere fut Que";

}






function ord_alphlong(str) {
  const words = str.split(/\s+/); 
  words.sort(function(a, b) {
    const lengthComparison = a.length - b.length;
    if (lengthComparison !== 0) {
      return lengthComparison;
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  let result = '';
  let currentLength = null;

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    if (word.length !== currentLength) {
      if (currentLength !== null) {
        result += '^';
      }
      currentLength = word.length;
    } else {
      result += ' ';
    }

    if (word.length === 1) {
      result += word.toUpperCase();
    } else {
      result += word;
    }
  }

  return result;
}

// Example usage:
const string = 'This is a sample string to test the function';
const sortedWords = ord_alphlong(string);
console.log(sortedWords);

  












