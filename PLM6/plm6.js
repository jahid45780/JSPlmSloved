// const numbers=[1,2,3,4,5,6,77,1,2,3,5,8,89,2]
// const duplicates =numbers.filter(function(value, index, array){
//     return array.indexOf(value)  !== index
// }) 

// console.log(duplicates);

// unik number 
const  numbers = [1,2,3,4,5,55,67,7,1,2,3,]
const unik = numbers.filter(function(value, index,array){
    return   array.indexOf(value) === index;
})

console.log(unik);

