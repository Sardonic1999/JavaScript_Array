var A = [1,3,2,2];
var S = 2;
function meanValue(A, S){
    var res = 0; // equal result
    var sum = 0; // sum of iteration
    A.map((item, index)=>{
        // console.log((sum = sum + item), index +1);
        (sum += item) / (index + 1) === S && res++;
        //iner loop
        var j = 1;
        var cnt = 0;
        for (let i = index + 1; i < A.length; i++){
            (cnt += A[i]) / j === S && res++;
            j++
        }
    });
    console.log('res', res);
}
meanValue(A, S);

console.log('==========================');

var name = 'aabbbbahhhjjjjkllf';
var result = '';

function stringZip(name){
    var nameZip = name.split("");
    i = 1;
    nameZip.forEach((letter, count) => {
        if (letter == nameZip[count + 1]) {
            i += 1;
        }else {
            if (i == 1) {
                result = result + nameZip[count];
            }else {
                result = result + nameZip[count] + i;
                i = 1;
            }
        }
    });
    return console.log(result);
}

stringZip(name);
