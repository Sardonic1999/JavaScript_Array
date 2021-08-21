
const number = 45678914567;
const array = Array.from(String(number), Number);
// const array = [1,3,4,5,6,7,8,2,3];
// const array = Array.from(number.toString()).map(Number)

const sum = 6;

const twoSum02 = (array, sum) => {
    for (let i=0; i<array.length; i++){
        for(let j=array[i] +1; j<array.length; j++){
            if((array[i] + array[j])/2 === sum){
                return [array[i], array[j]];
            }
        }
    }
    return "Not found"
}

console.log(twoSum02(array, sum));

