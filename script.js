// ACTION AU CHARGEMENT DE LA PAGE
window.onload=function()
{
    // AFFICHAGE DE DEPART DE LA VILLE
    let ville = "Saint-Martin-d'hères";
    recevoirTemperature("Saint-Martin-d'hères");

    // ACTION SUIVANT CLIC BOUTON "CHANGER DE VILLE"
    let changerDeVille = document.querySelector("#changer");
    changerDeVille.addEventListener("click", function(event) 
    {
        ville = prompt("Quelle ville souhaitez vous voir ?"); 
        recevoirTemperature(ville);
    });

}

// DECLARATION FONCTION QUI VA CHERCHER LES DONNEES DE LA METEO SUR L'API
function recevoirTemperature(ville) 
{
    // URL API AVEC CLE API - constante
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + 
    '&appid=07d616ae701c57a467e821b0867b2da6&units=metric';

    // COMMANDE REQUETE WAB
    let requete = new XMLHttpRequest();
    requete.open('GET',url);
    requete.responseType = 'json';
    requete.send();
    // ACTIONS SUITE REQUETE WEB
    requete.onload = function () 
    {
        if(requete.readyState === XMLHttpRequest.DONE) 
        {
            // SI REQUETE REUSSIE
            if(requete.status === 200) 
            {
                // ALLER CHERCHER LES VARIABLES DANS LE ARRAY DE L'API
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                let temperature_ressentie = reponse.main.feels_like;
                let humidite = reponse.main.humidity;
                let description = reponse.weather.description;
                let vitesse_vent = reponse.wind.speed;
                // POSITIONNEMENT DANS LA PAGE HTML
                document.querySelector("#temperature_label").textContent = temperature;
                document.querySelector("#ville").textContent = ville;
                document.querySelector("#temperature_ressentie").textContent = temperature_ressentie;
                document.querySelector("#humidite").textContent = humidite;
                document.querySelector("#description").textContent = description;
                document.querySelector("#vitesse_vent").textContent = vitesse_vent;
            }
            // MESSAGE SI ERREUR DE LA REQUETE WEB
            else
            {
                alert("Un problème est intervenu, merci de revenir plus tard")
            }
        }
    }    
}
