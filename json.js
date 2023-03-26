const obj = {
    name : "sanjeev",
    contact: 123445,
    address : 'Khokana'
}

console.log(obj)
console.log(typeof obj)

//convert to json
const newJSON = JSON.stringify(obj)
console.log(newJSON);
//convert back to obj
const obj2 = JSON.parse(newJSON)
console.log(obj2)