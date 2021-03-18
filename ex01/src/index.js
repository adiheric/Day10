var myPet = {
species: "kurban",
name: "ovan",
legs: "4",
friends: 0
}

function myFunction(myPet){
    return myPet;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };