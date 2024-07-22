// Problem 1

// function multiplyValues(obj, n) {
//     const res = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             res[key] = obj[key] * n;
//         }
//     }
//     return res;
// }


// const n = 3;
// const obj = {a: 2, b: 3, c: 4};
// const res = multiplyValues(obj, n);

// console.log(res); 


// Problem 2 

// function countWordsWithA(str) {
//     const words = str.split(' '); 
//     let count = 0;
    
//     for (let word of words) {
//         if (word.includes('a') || word.includes('A')) { 
//             count++;
//         }
//     }
    
//     return count;
// }

// const inputStr = "Apple banana cherry date apricot";
// const result = countWordsWithA(inputStr);

// console.log(result);

// Problem 3 
// function checkReadStatus(books) {
//     books.forEach((book, index) => {
//         const readStatus = book.read ? "o'qilgan" : "o'qilmagan";
//         console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${readStatus}`);
//     });
// }


// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];

// checkReadStatus(books);

// Problem 4

// function createObjectFromArray(arr) {
//     const result = {};
//     arr.forEach(str => {
//         result[str] = str.length;
//     });
//     return result;
// }


// const inputArray = ["text", "world", "laptop"];
// const outputObject = createObjectFromArray(inputArray);

// console.log(outputObject); 

// Problem 5    
// function countOccurrences(arr) {
//     const result = {};
//     arr.forEach(item => {
//         if (result[item]) {
//             result[item]++;
//         } else {
//             result[item] = 1;
//         }
//     });
//     return result;
// }


// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const outputObject = countOccurrences(animals);

// console.log(outputObject);


// Problem 6 

// function ageDifference(arr) {
    
//     arr.sort((a, b) => a.age - b.age);
    
//     const youngestAge = arr[0].age;
//     const oldestAge = arr[arr.length - 1].age;
    
    
//     const difference = oldestAge - youngestAge;
    
//     return difference;
// }

// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// const result = ageDifference(people);

// console.log(result); 

// Problem 7    
// function getTruthyFalsy(arr) {

//     const truthy = arr.filter(item => Boolean(item));
//     const falsy = arr.filter(item => !Boolean(item));
    
 
//     return {
//         truthy: truthy,
//         falsy: falsy
//     };
// }


// const inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const result = getTruthyFalsy(inputArray);

// console.log(result); 

// Problem 8
// function minMaxWord(sentence) {

//     const words = sentence.split(' ');

//     let minWord = words[0];
//     let maxWord = words[0];

    
//     words.forEach(word => {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }
//     });


//     return { minWord, maxWord };
// }


// const sentence = "Men dasturlash kursida o'qiyman";
// const result = minMaxWord(sentence);

// console.log(result); 

// Problem 11
// var rotate = function(matrix) {
//     const n = matrix.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; 
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
// };

// const matrix = [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16]
// ];

// rotate(matrix);
// console.log(matrix);
 
// Problem 12

// function lengthOfLastWord(str) {
   
//     const words = str.trim().split(' ');
    
    
//     return words.length > 0 ? words[words.length - 1].length : 0;
// }


// const input = "Bu yerda bir misol bor";
// const result = lengthOfLastWord(input);

// console.log(result);

// Problem 13

// function objectToStringArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
// }


// const input = {a: 2, b: 5, c: 7};
// const result = objectToStringArray(input);

// console.log(result); 

// Problem 14

// var findMedianSortedArrays = function(nums1, nums2) {
  
//     const merged = nums1.concat(nums2).sort((a, b) => a - b);
//     const length = merged.length;

//     if (length % 2 === 0) {
        
//         return (merged[length / 2 - 1] + merged[length / 2]) / 2;
//     } else {
     
//         return merged[Math.floor(length / 2)];
//     }
// };

// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const result = findMedianSortedArrays(nums1, nums2);

// console.log(result); 

//  Problem 15
// function getDuplicateItems(arr) {
//     const itemCount = {};
//     const duplicates = [];

  
//     arr.forEach(item => {
//         itemCount[item] = (itemCount[item] || 0) + 1;
//     });

   
//     for (const item in itemCount) {
//         if (itemCount[item] > 1) {
//             duplicates.push(item);
//         }
//     }

//     return duplicates;
// }

// const inputArray = ['apple', 'banana', 'orange', 'apple', 'pear', 'banana', 'kiwi'];
// const result = getDuplicateItems(inputArray);

// console.log(result); 

// Problem 16

// let products = [
//     {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// products = products.filter(product => product.id !== 4);

// console.log(products);

// Problem 17

// function ageDifference(people) {
  
//     people.sort((a, b) => a.age - b.age);

   
//     const youngestAge = people[0].age;
//     const oldestAge = people[people.length - 1].age;

    
//     return oldestAge - youngestAge;
// }


// const input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// const result = ageDifference(input);

// console.log(result); 










