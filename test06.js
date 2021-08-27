// const arr = [1, 4, 3, 4, 5, 6, 2];
const number1 = 123;
const number02 = 45567;
const arr1 = Array.from(String(number1), Number);
const arr2 = Array.from(String(number02), Number);
const arr = arr1.concat(arr2);


function median(arr){
    const Sorted = arr.sort((a, b)=> a-b);
    return Sorted.length % 2 ===0 ? (Sorted[Sorted.length/2 - 1] + Sorted[Sorted.length/2])/ 2    
    :
    Sorted[Math.floor(Sorted.length/2)];     // agar toq bolsa uzunligini 2 ga boldik xolos
}
console.log(median(arr));  // arrayda berilgan qiymatlarni ichidan medianasini topish.
                            // sort orqali tartiblab oldik va agar juft bolsa
                            // sort qilingan  nomerlarni uzunligini 2 ga bolib 1ni ayrdik va 
                            // uzunligini 2 ga bolib yana 2 ga boldik va qoshdik.
console.log('===========================================');

function mean(arr){
    let sum = arr.reduce((a,b)=>a+b, 0);
    return sum/arr.length;
}

console.log(mean(arr));  // o'rta arifmetigini hisoblab beradi. mean- o'rtacha
console.log('===========================================');

