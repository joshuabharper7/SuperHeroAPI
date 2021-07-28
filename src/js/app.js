const divContainer = document.querySelector(".container");
const accessToken = "10221023993695824";
const searchButton = document.getElementById("submit");




searchButton.addEventListener("click", function(){
const heroName = document.getElementById("heroName").value;
const heroSearchURL = `http://www.superheroapi.com/api/${accessToken}/search/${heroName}`;
console.log(heroSearchURL);
fetch(heroSearchURL).then(response.json()).then(data => {
console.log("fired fetch")
const {name, base, powerstats, biography} = data;

console.log(name)
});
});