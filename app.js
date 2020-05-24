// Demande à l'utilisateur le nombre de bâtons pour jouer
//let numberOfRod = prompt("Avec combien de bâtons souhaitez vous jouer ?");
let numberOfRod = 20;

// ** fonction de création des bâtons ** //

const createmyRod = () => {
    for (let i = 0; i < numberOfRod; i++) {
        const createRod = document.createElement("div");
        createRod.classList.add("rod");
        createRod.id = "rod_" + (i + 1);
        document.getElementById("game_area_rod").appendChild(createRod);
    }    
};

createmyRod();

// ** module de récupération de la valeur du bouton radio ** //

const myButton = document.querySelector("button");


// attribution des nombres minimum et maximum à jouer
let max = 3;
let min = 1;

// génération du nombre aléatoire de l'ordinateur
const createComputerRod = () => {
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("computer_number_of_rod").textContent = computerChoice;
    document.getElementById("game_area_rod").innerHTML = "";
    numberOfRod -= computerChoice;
    createmyRod();
}

myButton.addEventListener("click", (e) => {
    //empêche le rafraichissement de la page
    e.preventDefault();
    let selected = document.querySelector('input[type="radio"]:checked');
    //vide la zone de jeu et attribue un nouveau nombre debâtons
    document.getElementById("game_area_rod").innerHTML = "";
    numberOfRod -= selected.value;
    // création d'une nouvelle zone de jeu avec le nombre de bâtons déduis
    createmyRod();

    // rajoute un intervalle de 1 seconde pour faire jouer l'ordinateur
    const timer = () => {
        setTimeout(createComputerRod, 1000); //On attend 5 secondes avant d'exécuter la fonction
    }
    timer(); 
});

//* établir le gagnant et perdant 
// si le nombre de batonnet entre 3 et 1 , au moment de jouer, on gagne

