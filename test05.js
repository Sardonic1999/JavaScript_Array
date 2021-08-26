var str = 'AAABBBHHD';
count = 1;
res= '';

for(i = 0; i<str.length; i++){
    if(str[i] == str[i+1]){
        count++
    } else{
     if (count ==1) {

        res = res + str[i]
    }else {res= res +str[i] + count
    count = 1}
}
}

console.log(res);  // nechta harf qatnashganini chiqarib beradi.

const array3 = [1,3,2,2];
// const array3 = Array.from(String(number4), Number);
const sum3 = 2;  // nechta orta arifmetigi 2 boladigan yigindilar mavjud.
res03 = 0;
sum =0;
 

const twoSum03 = (array3, sum3) => {
for( let i=0; i<array3.length; i++){
    sum += array3[i]
    if(sum/(i+1) == sum3){
        res03++
    }
    count  = 0;
        f =1;
        
    for(let j= i+1; j<array3.length; j++){
        (count += array3[j]) /f=== sum3 && res03++;
        f++
        
    }
}
console.log(res03);
}

twoSum03(array3,sum3)

