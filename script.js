let obj = {
    name : "Sanni",
    address:"tarwa Majauliya",
    mob:7371099377,
}

// function displayObj(key){
//     console.log(obj[key]);
    
// }


function addObj(key , val){
    obj[key] = val;
}
// displayObj("name")
// displayObj("address")
// displayObj("mob")
// displayObj("mobs")
addObj("pincode" , 843122)
console.log(obj);

function deleteObj(key){
    delete obj[key];
}
deleteObj('address')
console.log(obj);
