// clé API : 07d616ae701c57a467e821b0867b2da6
window.onload=function(){
    let ville = "Saint-Martin-d'hères";
    recevoirTemperature("Saint-Martin-d'hères");

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", function(event) {
    ville = prompt("Quelle ville souhaitez vous voir ?"); 
    recevoirTemperature(ville);
});

}

function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=07d616ae701c57a467e821b0867b2da6&units=metric';



let requete = new XMLHttpRequest();
requete.open('GET',url);
requete.responseType = 'json';
requete.send();

requete.onload = function () {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        let temperature_ressentie = reponse.main.feels_like;
        let humidite = reponse.main.humidity;
        let description = reponse.weather.description;
        let vitesse_vent = reponse.wind.speed;      
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temperature_ressentie").textContent = temperature_ressentie;
        document.querySelector("#humidite").textContent = humidite;
        document.querySelector("#description").textContent = description;
        document.querySelector("#vitesse_vent").textContent = vitesse_vent;
    }
    else{
        alert("Un problème est intervenu, merci de revenir plus tard")
    }
}}
}
