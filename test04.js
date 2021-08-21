var list = [
    {id:'1', ids: 1, name: 'Sardor', surname: 'Jorayev'},
    {id:'2', ids: 2, name: 'Anvar', surname: 'Vafoyev'},
    {id:'3', ids: 3, name: 'Sarvar', surname: 'Komilov'},
    {id:'4', ids: 4, name: 'Hamid', surname: 'Saidov'},
]

const getSearch =(title,keys)=>{
    if (keys === 'name') 
    return list.filter(value => value.name.toLocaleLowerCase().includes(title.toLocaleLowerCase()) )
    else if (keys ==='surname')
    return list.filter(value => value.surname.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    else if (keys === 'id')
    return list.filter(value => value.id.includes(title))
    else if (keys === 'ids')
    return list.filter(value => value.ids.toString().includes(title))
}

console.log(
    getSearch('2','ids')
);
