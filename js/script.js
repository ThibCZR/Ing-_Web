// Liste de mots
const mots = [  "Soleil",
                "Orange",
                "Tomate",
                "Jardin",
                "Souris",
                "Livres",
                "Gâteau",
                "Manger"
] 

function startGame() {
    var motSelectionne;
    var indexAleatoire = Math.floor(Math.random() * mots.length);
    motSelectionne = mots[indexAleatoire];
    console.log(motSelectionne);
}

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

var boutonStart = document.getElementById("start");
boutonStart.addEventListener("click", startGame);
boutonStart.addEventListener("click", genererGrille);
