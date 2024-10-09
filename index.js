
// const x = 10;

// if (1 === 1){
//     const y = 5;
//     console.log('1' ,x)
//     console.log('2', y)
// }
// console.log('3', x)
// console.log('4', y)



// const stopLetter= (str, num) => {
//     if (str.length < num){
//         return console.log('string is too short')
//     }
//     for (let i = 0; i < num ; i++){
//         console.log(str[i])
//     }
// }
// stopLetter('Daniela', 5)




// const stopAt= (str, num) => {
//     if (str.length < num){
//         return console.log('string is too short')}

//     let result = '';

//     for (let i = 0; i < num ; i++){
//         result+=str[i]
//      }
//     console.log(result)
// }
// stopAt('Daniela', 5)



// const stopAt= (str, num) => {
//     if (str.length < num){
//         return console.log('string is too short')}

//     let result = '';

//     for (let i = 0; i < str.length ; i++){
//         result = i < num ? result+=str[i] : result
//      }
//     console.log(result)
// }
// stopAt('Daniela', 5)


// array

// const arr = ['test', 3 , true, {}, [], []]

// const arr = [1,2,3,4,5,,,,,,,,,6]

// const arr1 =arr

// arr[0] = 99

// console.log(arr)

// console.log(arr.length)

// delete arr[3]

// arr.length = 3


// const arr = [1,2,3,4,5]
// const arr1 = [...arr, ...arr]

// // arr1[0] = 99


// console.log(arr)
// console.log(arr1)


// const obj = {
//     name:'Ionel',
//     job: 'dev',

// }
// const obj1 = {...obj}


// obj1.name = 'Vic'
// console.log(obj)

// console.log(obj1)


// const arr = [1,2,3,4,5]
// const arr1 = [...arr, ...arr]

// arr1[3] = 56

// console.log(arr)
// console.log(arr1)


// const obj = {
//     name: 'ani',
//     job: 'stand',
//     city: 'vegas'
// }

// const obj1 = {...obj, job:'housewife'}

// console.log(obj)
// console.log(obj1)


const arr = [1,2,3,4,5]

const arr1 =arr.map((item, index, arr) => {
    // console.log(item, index)
    return item +1;

})


console.log(arr1)
