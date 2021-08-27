
// string ichida nechta a va nechta b harflari bor. hamma stringlar ichida
const arr = [
    {id:1, name: 'Gulbashakar', status: 'master'},
    {id:2, name: 'baliq', status: 'medium'},
    {id:3, name: 'MirshAkar', status: 'master'},
]

let str = ''
let countA = 0
let countB = 0
arr.map((value)=>{
    str += value.name + value.status;
    // countA = str.match(/a/gi).length;    // g global degani str ichidagi hammasini oladi
    // countB = str.match(/b/gi).length;    // i katta kichigini yoqotadi.
});

str.split('').map((value)=>{
    switch(value.toLocaleLowerCase()){
        case 'a': countA++; break;  // boshqacha yonalishda ishlsh
        case 'b': countB++; break;  // switch bilan.  
    }
})

console.log('countA:', countA, 'countB:', countB);