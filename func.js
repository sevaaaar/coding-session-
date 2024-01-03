// function my_union(str1, str2) {
//     union = ''
//     combined = str1 + str2
//     for(i = 0; i < combined.length; i++){
//         if(union.indexOf(combined[i]) === -1){
//             union += combined[i]
//         }
//     }
//     return union
// }

// let input1 = "zpadinton";
// let input2 = "paqefwtdjetyiytjneytjoeyjnejeyj";
// let output = my_union(input1, input2);
// console.log(output); // Output: "zpadintoqefwjy" 



// function my_isulnum(param_1){
//     if((param_1 >= 'A' && param_1>='Z') ||(param_1 >= 'a' && param_1>='z')||(param_1 >= 0 && param_1>=9)){
//         return 1;

//     }else{
//         return 0;
//     }
// }







// function my_iterative_pow(param_1, param_2){
//     let result = 1;
//     for(i = 0; i < param_2; i++){
//         result *= param_1
 
//     }
//     return result

// }





// function my_capitalize(param_1) {
//   for (var i = 0; i < param_1.length; i++) {
//     param_1[i] = param_1[i].toLowerCase();
//   }

//   param_1[0] = param_1[0].toUpperCase();

//   return param_1;
// }



// function my_recursive_pow(param_1, param_2){
//   return  Math.pow(param_1, param_2)
//  }


// function my_string_index(haystack, needle){
//   for(let i = 0; i < haystack.length; i++){
//     if(haystack[i] === needle){
//       return i;
//     }
//   }
//     return -1;
//   }

// let num1 = +prompt("Son kiriting: ");
// let num2 = +prompt("Son kiriting: ");
// alert(`plus: ${num1+num2}
// sub: ${num1-num2}
// eq: ${num1/num2}
// mult: ${num1*num2} 
// `);
// char* my_strchr(char* param_1, char param_2)
// {
//     for(int i=0; param_1[i] != '\0'; i++)
//     if (param_1[i]==param_2) {
//         return &param_1[i];
//     }
//     return 0;
// }
// function my_string_formatting(firstname, lastname, age){
//   console.log("Hello, my name is " + firstname + " " + lastname + ", I'm " + age + ".");
//   }


// const str = "Hello";
// const charCode = str.charCodeAt(1); // The param_1 starts at 0, so we use 1 to get the second character

// console.log(charCode); // Output: 101


// function rotone(param_1){
//     let string = "";
//     for (i = 0; i < param_1.length; i++){
//         let char = param_1[i];
//         let code = char.charCodeAt(0);
//     }
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
//         if(code === 90 || code === 122){
//             code -= 25
//         } else {
//             code ++;
//         }

//         string += String.fromCharCode(code)
//     }else{
//         string += char
//     }
//     return string
// }




// function my_split(param_1, param_2) {
//     let array = [];
//     let string = "";
//     for(i = 0; i < param_1.length; i++){
//         if(param_1[i] == param_2){
//            if(string !== ''){
//            array.push(string)
//            string = "";
//      }
//      string += param_1[i];
//     }
//   }

//   if (string !== "") {
//     array.push(string);
//   }

//   return array;
// }

function find_pivot(param_1){

   let totalSum = 0; 
   let leftSum = 0; 

   p1.forEach((element) => totalSum += element);


   for(let i=0; i<nums.length; i++){
      if(totalSum - leftSum - param_1[i] === leftSum){
         return i;
      }
      leftSum += param_1[i]
   }
   return -1;
}

















function find_pivot(p1) {
  let totalSum = 0
  let leftSum = 0
  for(let i = 0; i < p1.length; i++) {
      totalSum += p1[i]
  }
  
  
  for (let i = 0; i < p1.length; i++) {
      let rightSum = totalSum - p1[i] - leftSum
      if (rightSum === leftSum) {
          return i
      }
      leftSum += p1[i]
  }
  return -1
};






function ugly_number(num) {
    if (num < 1) {
        return false;
    }
     else if (num === 1) {
        return true;
    }
  
    let divisor = [2, 3, 5];
  
    for (var i = 0; i < divisor.length; i++) {
      while (num && num % divisor[i] === 0) {
        num = Math.floor(num / divisor[i]);
      }
    }
  
    return num === 1;
  };





//   function print_duplicates(param_1, param_2, param_3, param_4){

//   }

// function print_duplicates(param_1, param_2, param_3, param_4) {
//   let i = 0;
//   let j = 0;
//   const duplicates = [];

//   while (i < param_2 && j < param_4) {
//     if (param_1[i] < param_3[j]) {
//       i++;
//     } else if (param_1[i] > param_3[j]) {
//       j++;
//     } else {
//       duplicates.push(param_1[i]);
//       i++;
//       j++;
//     }
//   }

//   if (duplicates.length > 0) {
//     console.log(duplicates.join(" "));
//   } else {
//     console.log("");
//   }
//   return 2
// }

class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

function Intersection(headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }

  if (currA === currB && currA !== null) {
    return 1;
  } else {
    return 0;
  }
}


class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

function intersection(headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }

  if (currA === currB && currA !== null) {
    return 1;
  } else {
    return 0;
  }
}




function ord_alphlong(string) {
  const words = string.match(/[a-zA-Z]+/g); 
  const sortedWords = [];
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();
      return lowerA.localeCompare(lowerB);
    }
  });
  const result = [];
  let previousLength = -1;
  for (const word of words) {
    const length = word.length;
    if (length !== previousLength) {
      if (previousLength !== -1) {
        result.push('^');
      }
      previousLength = length;
    }
    result.push(word);
  }

  return result.join(' ');
}




class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function univalued_binary_tree(root) {
  if (!root) {
    return true;
  }

  const value = root.val;
  if (root.left && root.left.val !== value) {
    return false;
  }
  if (root.right && root.right.val !== value) {
    return false;
  }

  return univalued_binary_tree(root.left) && univalued_binary_tree(root.right);
}








class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function univalued_binary_tree(root) {
  if (!root) {
    return true; 
  }

  const value = root.val;

  if (root.left && (root.left.val !== value || !univalued_binary_tree(root.left))) {
    return false;
  }

  
  if (root.right && (root.right.val !== value || !univalued_binary_tree(root.right))) {
    return false;
  }

  return true;
}








console.log('hello sevara');




let height = 1.6;
let weight = 60;
let bmi = weight / (height**2)
















