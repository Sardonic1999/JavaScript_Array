
// var arr = ['A','B','C','A','C'];
var str = 'AYUIYAKLM'; 
var arr = str.split('');
let list = [];

for(value of arr){
    if(list.includes(value)) {
        console.log(value);
        break;
    }
    list.push(value)
}



