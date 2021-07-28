const divContainer = document.querySelector(".container");
const accessToken = "10221023993695824";
const searchNameButton = document.getElementById("submit");




searchNameButton.addEventListener("click", function(){
const heroName = document.getElementById("heroName").value;
const heroSearchURL = `https://www.superheroapi.com/api.php/${accessToken}/search/${heroName}`;
console.log(heroSearchURL);
fetch(heroSearchURL).then(response => response.json()).then(data => {
console.log("fired fetch")
const {results, response} = data;
divContainer.innerHTML = results;
console.log(data)
});
});