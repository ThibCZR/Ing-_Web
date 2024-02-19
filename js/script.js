// Liste de mots
const mots = [
    "SOLEIL",
    "ORANGE",
    "TOMATE",
    "JARDIN",
    "SOURIS",
    "LIVRES",
    "GATEAU",
    "MANGER"
];

var motSelectionne;

function startGame() {
    var indexAleatoire = Math.floor(Math.random() * mots.length);
    motSelectionne = mots[indexAleatoire];
    console.log(motSelectionne);
}
window.addEventListener("load", function() {
    startGame();
});

function genererGrille() {
    var grille = document.getElementById("grille");
    for (let i = 0; i < 6; i++) {
        var ligne = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            var colonne = document.createElement("th");
            colonne.textContent = "(" + (i + 1) + "," + (j + 1) + ")";
            ligne.appendChild(colonne);
        }
        grille.appendChild(ligne);
    }
}
window.addEventListener("load", function() {
    genererGrille();
});

function saisie() {
    var inputField = document.getElementById("inputField");
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            var val = event.target.value.toUpperCase(); 
            var regex = /[^A-Z]/;
            var info = document.getElementById("info"); 
            switch (true) {
                case regex.test(val):
                    info.innerText = "Le mot ne doit contenir que des lettres de l'alphabet";
                    info.style.color = "red";
                    event.target.value = "";
                    break;
                case val.includes(' '):
                    info.innerText = "La valeur ne doit pas contenir d'espaces";
                    info.style.color = "red";
                    event.target.value = "";
                    break;
                case val.length !== 6:
                    info.innerText = "Le mot doit contenir 6 lettres";
                    event.target.value = "";
                    break;
                case val !== motSelectionne:
                    info.innerText = "Ce n'est pas la valeur attendue.";
                    info.style.color = "red";
                    event.target.value = "";
                    break;
                default:
                    info.innerText = "Bravo, la saisie est correcte !";
                    info.style.color = "green";
                }
        }
    });
}
saisie();

var restart = document.getElementById("restart");
restart.addEventListener("click",function(){
    startGame()
});

