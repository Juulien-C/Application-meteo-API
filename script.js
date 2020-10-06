let ville = "Paris";
recevoirTemperature(ville);


let bouton = document.querySelector('#changer').addEventListener('click', () => {
  let  ville = prompt('Choisissez un ville');
  recevoirTemperature(ville);
});

function recevoirTemperature(ville){
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=98f54172cc7e07bc6e26a059e4274475&units=metric';


  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
      if(requete.status === 200) {
        let reponse = requete.response;
        //console.log(reponse);
        let meteo = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector('#temperature_label').textContent = meteo;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert("Un problème est survenu, revener plus tard !");
      }
    }
  }
}
  