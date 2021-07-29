const divContainer = document.querySelector(".container");
const accessToken = "10221023993695824";
const searchNameButton = document.getElementById("submit");



searchNameButton.addEventListener("click", function(){
const heroInfo = document.getElementById("heroInfo");
const heroSection = document.getElementById("heroSection");
const heroName = document.getElementById("heroName").value;
const heroSearchURL = `https://www.superheroapi.com/api.php/${accessToken}/search/${heroName}`;
console.log(heroSearchURL);
fetch(heroSearchURL).then(response => response.json()).then(data => {
console.log("fired fetch")
const {results, response} = data;
const currentChild=document.getElementById("placeholderInfo");
heroSection.removeChild(heroInfo);
let list = document.createElement("ul");
list.id = "heroInfo";
let item = document.createElement("li");
item.id = "placeholderInfo";
list.appendChild(item);



for(let i =0; i< results.length; i++){
    let item = document.createElement("li");
    item.id = "placeholderInfo";
    item.innerHTML = `
    <h3 id="details">${results[i].name}</H3>
    <img src='${results[i].image.url}' />
    <p id="details">${results[i].biography["full-name"]}</p>
    <p id="details">${results[i].appearance.gender}</p>
    <p id="details">${results[i].appearance.race}</p>
    <p id="details">${results[i].biography.alignment}</p>
    <p id="details">${results[i].biography.publisher}</p>
    
    <ul>
        <h4 id="details">Power Stats</h4>
        <li id="details"><label>Combat: </label>${results[i].powerstats.combat}</li>
        <li id="details"><label>Durability: </label>${results[i].powerstats.durability}</li>
        <li id="details"><label>Intelligence: </label>${results[i].powerstats.intelligence}</li>
        <li id="details"><label>Power: </label>${results[i].powerstats.power}</li>
        <li id="details"><label>Speed: </label>${results[i].powerstats.speed}</li>
        <li id="details"><label>Strength: </label>${results[i].powerstats.strength}</li>
    </ul>
    `;

    list.appendChild(item);
    //heroInfo.replaceChild(item, currentChild);
}

heroSection.appendChild(list);

console.log(data)
});
});