let compteur = 10;

let input = document.getElementById('input');
let compteurElement = document.getElementById('compteur');
let message = document.getElementById('message');
let number = Math.floor(Math.random() * 100 ) + 1 ;

console.log(number)

let button = document.getElementById('button');
button.addEventListener('click', deviner);

function deviner() {

    if(compteur > -1){
        let nombreUtilisateur = parseInt(input.value);
        if(number === nombreUtilisateur){
            message.innerText = 'Vous avez gagné';
        }

        else if (number > nombreUtilisateur) {
            message.innerText = 'Presque';
            compteur--;
        }

        else if (number < nombreUtilisateur){
            message.innerText = 'Trop grand';
            compteur--;
        }

        compteurElement.innerHTML = compteur.toString();
    }
    else {
        message.innerHTML = 'Perdu';
        setTimeout(() => restart(button2), 4000);
    }
}

let button2 = document.getElementById('button2');

function restart(){

    document.location.reload();
}

