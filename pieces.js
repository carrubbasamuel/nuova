async function response() {
    const response = await fetch("pieces-autos.json");
    const pieces = await response.json();
  
    console.log(pieces);
    return pieces;
}
  

//*L'errore sull'appendchild era determinato dal fatto che per manipolare elementi sul DOM è sempre meglio utilizzare un selettore piu' specifico, in questo caso il selettore id.
//*Aggiunte le coppie chiave valore image su article con il percorso corretto.
function generatePieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {
        let article = pieces[i];
        // recuperation de l'element du DOM qui acceuillera les fiches
        let sectionFiches = document.querySelector("#fiches");
        // creation d'un balise dedié a une piece automobile
        let pieceElement = document.createElement("article");
        // creation des balises
        let imageElement = document.createElement("img");
        imageElement.src = article.image;
        let nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        let prixElement = document.createElement("p");
        prixElement.innerText = `prix: ${article.prix} £  (${article.prix < 35 ? "£" : "£££"})`;
        let categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? " nessun categorie";

        // l’opérateur nullish pour fournir une valeur de remplacement quand une valeur est null ??,
        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description;
        let stockElement = document.createElement("p");

        // l’opérateur ternaire pour transformer une valeur en une autre
        stockElement.innerText = article.disponibilite ? "en stock" : "rupture en stock";

        // on rattache la balise article a la section fiche
        sectionFiches.appendChild(pieceElement);
        // rattachements de nos elements au DOM
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);

        // ajout des elements au DOM
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
    }

    //!BOTTONI DA SISTEMARE

    let buttonTrier = document.querySelector("#trier");
    buttonTrier.addEventListener("click", () => {
        let piecesordonnees = Array.from(pieces);
        piecesordonnees.sort(function (a, b) {
        return a.prix - b.prix;
        });
        console.log(piecesordonnees);
    });

    let buttonFiltre = document.querySelector("#btn-filter");
    buttonFiltre.addEventListener("click", function () {
        let piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
        });
        console.log(piecesFiltrees);
    });

    let filtreDescription = document.querySelector("#btn-Nodesc");
    filtreDescription.addEventListener("click", function () {
        let piecesFiltrees = pieces.filter(function (piece) {
        return !piece.description;
        });
        console.log(piecesFiltrees);
    });

    let buttonDecroissant = document.querySelector("#btn-decroissant");
    buttonDecroissant.addEventListener("click", function () {
        let piecesordonnees = Array.from(pieces);
        piecesordonnees.sort(function (a, b) {
        return b.prix - a.prix;
        });
        console.log(piecesordonnees);
    });
}
  
  
  


document.addEventListener("DOMContentLoaded", response().then(generatePieces));//*Aggiunto un modo alternativo per richiamare la promise. 
