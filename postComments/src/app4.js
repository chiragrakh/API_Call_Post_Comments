let gamingProducts = [
    {
        id: 1,
        productName: "Playstation 5",
        category: "Console",
        brand: "Sony",
    },
    {
        id: 2,
        productName: "Playstation 4",
        category: "Console",
        brand: "Sony",
    },
    {
        id: 5,
        productName: "Playstation 4",
        category: "Console",
        brand: "Sony",
    },
    {
        id: 3,
        productName: "Xbox 1",
        category: "console",
        brand: "Microsoft",
    },
    {
        id: 4,
        productName: "Xbox xs",
        category: "console",
        brand: "Microsoft",
    },
    {
        id: 6,
        productName: "Xbox xs",
        category: "console",
        brand: "Microsoft",
    },
    {
        id: 7,
        productName: "Xbox series x",
        category: "console",
        brand: "Microsoft",
    }
];

let data = gamingProducts.filter(item => {
    if (item.brand === "Sony") {
        return item;
    }
})

getCount("productName")
function getCount(key) {
    filteredArray = gamingProducts.reduce((acc, product) => {
        // console.log(product);
        acc[product[key]] = (acc[product[key]] || 0) + 1;
        return acc;
    }, {})

    console.log(filteredArray);
}
























// let microsoftProducts = gamingProducts.filter((product) => product.brand === "Microsoft");

// let sonyProducts = gamingProducts.filter((product) => product.brand === "Sony" && product.category == "Console");

// brandProducts = gamingProducts.reduce((acc, product) => {

//     // 1st way
//     // if (acc[product.productName] === undefined){
//     //     acc[product.productName] = 1;
//     // }
//     // else {
//     //     acc[product.productName] += 1;
//     // }
//     // 2nd way
//     acc[product.brand] = (acc[product.brand] || 0) + 1;
//     return acc;
// }, {});



// console.log(brandProducts);

// Object.keys(brandProducts).forEach(function (product) {
//     console.log(product, ": ", brandProducts[product])
// })


// console.log();

// const output = {
//     Sony: 3,
//     Microsoft: 2
// }



/* Q1
Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

Test Data :
([2, NaN, 8, 16, 32]) -> [1]
([2, 4, NaN, 16, 32, NaN]) -> [2,5]
([2, 4, 16, 32]) ->[]
Expected Output:
Original array: 2,NaN,8,16,32
Find all indexes of NaN of the said array: 1
Original array: 2,4,NaN,16,32,NaN
Find all indexes of NaN of the said array: 2,5
Original array: 2,4,16,32
Find all indexes of NaN of the said array:
*/
// let arr1 = [2, NaN, 8, 16, 32];
// let arr2 = [2, 4, NaN, 16, 32, NaN];
// let arr3 = [2, 4, 16, 32, NaN];

// let data = arr3.reduce((acc, element, index) => {
//     // console.log(acc, element, index);
//     if (!element){
//         acc.push(index);
//     }
//     return acc;
// }, []);
// console.log(data);


// Q2
// Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

// let arr1 = [2,8,[6],3,3,5,3,4,[5,4]];
// let arr2 = [2,8,[6,3,3],[4],5,[3,4,[5,4]]];

// // 1st way
// // let filteredArr = arr2.filter((element) => typeof (element) === "object");

// // 2nd way
// let filteredArr = arr2.filter((element) => Array.isArray(element));
// console.log("Number of arrays inside the said array: ", filteredArr.length);


// Q3
/*
Write a JavaScript program to check if an array is a factor chain or not.

A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
[2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32

Test Data :
([2, 4, 8, 16, 32]) -> true
([2, 4, 16, 32, 64]) -> true
([2, 4, 16, 32, 68]) -> false
Expected Output:
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
false
*/

// let arr1 = [2, 4, 8, 16, 32];
// let arr2 = [2, 4, 16, 32, 64];
// let arr3 = [2, 4, 16, 32, 68];

// isFactorArray(arr2);

// function isFactorArray(arr) {
//     for (let i=0; i<arr.length-1; i++){
//         if (arr[i+1] % arr[i] === 0){
//             flag = true;
//         }
//         else{
//             flag = false;
//         }
//     }
//     console.log(flag);
// }


/* Q4
Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

Test Data :
([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
([2, 3, 0, 5, 7, 8, true, false]) -> 25
Expected Output:
Original array: 2,11,3,a2,false,5,7,1
Sum all numbers of the said array: 18
Original array: 2,3,0,5,7,8,true,false
Sum all numbers of the said array: 25
*/

// let arr1 = [2, "11", 3, "a2", false, 5, 7, 1];
// let arr2 = [2, 3, 0, 5, 7, 8, true, false];

// calculateSum(arr2);
// function calculateSum(arr) {
//     let total = 0;
//     arr.filter((element) => typeof(element) === "number").forEach(element => {
//         total += element;
//     });

//     console.log(total);
//     // console.log(total);
// }


/* Q5
Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

*/

// let gamingProducts = [
//     {
//         id: 1,
//         productName: "Playstation 5",
//         category: "Console",
//         brand: "Sony",
//     },
//     {
//         id: 2,
//         productName: "Playstation 4",
//         category: "Console",
//         brand: "Sony",
//     },
//     {
//         id: 5,
//         productName: "Playstation 4",
//         category: "Console",
//         brand: "Sony",
//     },
//     {
//         id: 3,
//         productName: "Xbox 1",
//         category: "console",
//         brand: "Microsoft",
//     },
//     {
//         id: 4,
//         productName: "Xbox xs",
//         category: "console",
//         brand: "Microsoft",
//     }
// ];

//  result = [[[id, 1], [productName, "Playstation 5"], [category, "console"], [brand, "sony"]]];

// let result = [];
// gamingProducts.map(function (product) {
//     // console.log(product);
//     // result.push([Object.keys(product), Object.values(product)]);
//     result.push(Object.keys(product).map(function (key) {
//         return [key, product[key]];
//     }))
// })

// console.log(result);


/* Q6

Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 1st way
// console.log(Object.keys(student).forEach((key) => console.log(key)));

// 2nd way
// console.log(Object.keys(student).toString());


/* Q7

Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// removekey(student, "rollno");

// function removekey(object, key) {
//     delete object[key];
// }
// console.log(student);



/* Q8 
Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 21,
//     age: 12
// };

// console.log(Object.keys(student).length);


/*  Q9

Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
*/

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// library.map((book) => console.log(book.author, book.title, (book.readingStatus?"Reading":"Not reading")));


/* Q10

Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/

// let cylinders = [
//     {
//         "r" : 4,
//         "h" : 6
//     },
//     {
//         "r" : 3,
//         "h" : 9
//     },
//     {
//         "r" : 14,
//         "h" : 3
//     },
//     {
//         "r" : 12,
//         "h" : 6
//     },
//     {
//         "r" : 1,
//         "h" : 1
//     }
// ];

// let cylinder = {
//     "r": 4,
//     "h": 6
// }

// cylinder["vol"] = 64;
// console.log(cylinder);
// console.log(cylinders);
// console.log(findVolume(cylinders));

// // function findVolume(cylinder1) {
// //     let vol = 3.14 * cylinder.r * cylinder.r * cylinder.h;
// //     return vol;
// // }

// function findVolume(cylinders) {
//     // cylinders.foreach((cylinder) => {
//     for(let i=0; i<cylinders.length; i++) {
//         // return [cylinder.r, cylinder.h, 3.14 * cylinder.r * cylinder.r * cylinder.h];
//         cylinders[i].volume = 3.14 * cylinder.r * cylinder.r * cylinder.h;
//     }
//     return cylinders;
// }


// // cylinders.forEach(function(cylinder) {
// //     cylinder.volume = 3.14 * cylinder.r * cylinder.r * cylinder.h;
// // });

// console.log(cylinders);



// Q11

// let gamingProducts = [
// {
//     id: 1,
//     productName: "Playstation 5",
//     category: "Console",
//     brand: "Sony",
// },
// {
//     id: 2,
//     productName: "Playstation 4",
//     category: "Console",
//     brand: "Sony",
// },
// {
//     id: 5,
//     productName: "Playstation 4",
//     category: "Console",
//     brand: "Sony",
// },
// {
//     id: 3,
//     productName: "Xbox 1",
//     category: "console",
//     brand: "Microsoft",
// },
// {
//     id: 4,
//     productName: "Xbox xs",
//     category: "console",
//     brand: "Microsoft",
// }
// ];

// let sonyProducts = gamingProducts.filter((product) => product.brand === "Sony");
// console.log(sonyProducts);

// gamingProducts.filter((product) => product.brand === "Sony").forEach((sonyProduct) => console.log(sonyProduct.productName));

// console.log(gamingProducts.filter((product) => product.brand === "Sony" && product.productName === "Playstation 4").length);

// let productQuantity = gamingProducts.reduce((acc, curr) => {
//     console.log(acc, curr);
//     acc[curr.productName] = (acc[curr.productName] || 0) + 1;
//     return acc;
// }, {})
// console.log(productQuantity);


// Q12

// Square the value of every element in the array. Presume that you will only get numbers in the input array.
// const input = [1, 2, 3, 4, 5];

// console.log(input.map((element) => element*element));


// Q13

// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150];

// let result=0; 
// input.filter((element) => element>0).forEach((element) => result += element);
// console.log(result);

// Q14

// Calculate the mean and median values of the number elements from the input array.
// const input = [12, 46, 32, 64];

// console.log(input.sort());
// let total = 0;
// input.forEach((element) => total += element);

// console.log("Mean:", total/input.length, "Median:", )

// input.reduce((acc, curr, index, array) => {
//     console.log(acc, curr, index, array);
//     if(array.length%2===0){
//         if 
//     }
// }, {mean:0, median:0})


// Q15
/*
You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.
*/
// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//     { name: "Joey", salary: 30000, department: "MK" },
// ];

// let departments = employees.reduce((acc, curr) => {
//     acc[curr.department] = (acc[curr.department] || 0) + curr.salary;
//     return acc;
// }, {})

// console.log(departments);

// avgDepartmentSalary = Object.keys(departments).map((department) => {
//     return [department, departments[department] / employees.filter((employee) => employee.department === department).length];
// }).filter((department) => department[1] > 50000);

// console.log(avgDepartmentSalary);


// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];
// console.log(input.flat().reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {}))