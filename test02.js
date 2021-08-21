
let arr00 = [12, 7, 39, 28, 51];

function findSum(arr00){
    let total = 0;
    for (let i=0; i<arr00.length; i++) {
        total += arr00[i];

    }
    return total;
}

console.log(findSum(arr00), 'Total');   // total hisoblash

console.log('===============');

let arr01 = [12, 7, 39, 28, 51];
function bubbleSort(arr01) {
    for(let i = 0; i < arr01.length; i++){
        for(let j = i+1; j< arr01.length; j++){
            if(arr01[i] > arr01[j]){
                let temp = arr01[i];
                arr01[i] = arr01[j];
                arr01[j] = temp;
            }
        }
    }
    return arr01
}

console.log(bubbleSort(arr01), 'BubbleSort');  // sort qilish

console.log('================');


function mode(arr){
    const arrObj = {}

    arr.forEach(elem => {
        if(!arrObj[elem]) arrObj[elem] = 0
        arrObj[elem]++        
    });
    return arrObj;
}

// const arr = [1,1,1,2,2,2,3];
const number01 = 1231123356;
const arr = Array.from(String(number01), Number);
console.log(mode(arr), 'Nechi marta takrorlangan');

console.log('==========');

// const arr02 = ['A','A','B','C','B','D'];
const str02 = 'AAVVBBTYUIII';
const arr02 = Array.from(str02);
function mode02(arr02){
    const arrObj02 = {}

    arr02.forEach(elem02 => {
        if(!arrObj02[elem02]) arrObj02[elem02] = 0
        arrObj02[elem02]++
    })
    return arrObj02;
}
console.log(mode02(arr02));

console.log('======================');

const twoSum02 = (array, sum) => {
    for (let i=0; i<array.length; i++){
        for(let j=array[i]+1; j<array.length; j++){
            if((array[i] + array[j])/2 === sum){
                return [array[i], array[j]];}
        }
    }
    return "Not found"
}
const array = [1,3,4,5,6,7,2,3];
const sum = 2;
console.log(twoSum02(array, sum));
