import {ajoutListenersAvis, ajoutListenerEnvoyersAvis} from "./avis.js"

async function response() {
    //   const response = await fetch(" http://localhost:8081/pieces");

      const response = await fetch("pieces-autos.json");
    const pieces = await response.json();
    ajoutListenerEnvoyersAvis();

    console.log(pieces);
    return pieces;
}


//*L'errore sull'appendchild era determinato dal fatto che per manipolare elementi sul DOM è sempre meglio utilizzare un selettore piu' specifico, in questo caso il selettore id.
//*Aggiunte le coppie chiave valore image su article con il percorso corretto.

// Fonction qui génère toute la page web
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
        prixElement.innerText = `prix: ${article.prix} €  (${article.prix < 35 ? "€" : "€€€"})`;
        let categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? " nessun categorie";

        // l’opérateur nullish pour fournir une valeur de remplacement quand une valeur est null ??,
        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description;
        let stockElement = document.createElement("p");

        // l’opérateur ternaire pour transformer une valeur en une autre
        stockElement.innerText = article.disponibilite ? "en stock" : "rupture en stock";
        
        let avisButon = document.createElement("button");
        avisButon.dataset.id =article.id;
        avisButon.textContent = "affichez les avis"

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
        pieceElement.appendChild(avisButon);
    }

    // BOTTONI  
    // Ajout du listener pour trier les pièces par ordre de prix croissant
    let buttonTrier = document.querySelector("#btn-trier");
    buttonTrier.addEventListener("click", () => {
        let piecesordonnees = Array.from(pieces);
        piecesordonnees.sort(function (a, b) {
            return a.prix - b.prix;
        });
        console.log(piecesordonnees);
    });
    // Ajout du listener pour filtrer les pièces non abordables
    let buttonFiltre = document.querySelector("#btn-filter");
    buttonFiltre.addEventListener("click", function () {
        let piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= 35;
        });
        console.log(piecesFiltrees);
    });
    // Ajout du listener pour trier les pièces par ordre de prix decroissant
    let filtreDescription = document.querySelector("#btn-Nodesc");
    filtreDescription.addEventListener("click", function () {
        let piecesFiltrees = pieces.filter(function (piece) {
            return !piece.description;
        });
        console.log(piecesFiltrees);
    });
    /* seleziona l'elemento del DOM con l'id "btn-decroissant" e lo memorizza nella variabile buttonDecroissant.
    buttonDecroissant.addEventListener("click", function () { ... }); 
    aggiunge un listener per l'evento click sul bottone selezionato. Quando viene cliccato il bottone, 
    viene eseguita la funzione definita come callback.    
       let piecesordonnees = Array.from(pieces); crea una copia dell'array pieces utilizzando il metodo Array.from(). 
       Questo viene fatto per evitare di modificare l'array originale durante l'ordinamento.
       piecesordonnees.sort(function (a, b) { return b.prix - a.prix; }); 
       ordina gli elementi dell'array piecesordonnees in base al valore della proprietà prix di ciascun 
       elemento. La funzione di confronto passata a sort() viene eseguita per confrontare due elementi a e b. 
       La differenza tra b.prix e a.prix determina l'ordine decrescente, in modo che gli elementi con un valore prix maggiore vengano posizionati prima.**/
    let buttonDecroissant = document.querySelector("#btn-decroissant");
    buttonDecroissant.addEventListener("click", function () {
        let piecesordonnees = Array.from(pieces);
        piecesordonnees.sort(function (a, b) {
            return b.prix - a.prix;
        });
        console.log(piecesordonnees);
    });
    //mappato una lista usando la funzione Lamda
    let noms = pieces.map(piece => piece.nom);
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix > 35) {
            noms.splice(i, 1);
        }

    }
    // creation de la liste
    let abordablesElement = document.createElement("ul");
    // ajouter chaque nom a la liste
    for (let i = 0; i < noms.length; i++) {
        let nomElement = document.createElement("li");
        nomElement.innerText = noms[i];
        abordablesElement.appendChild(nomElement);

    }
    
    document.querySelector("#abordables").appendChild(abordablesElement);
    // il metodo map() sugli elementi dell'array pieces per creare due nuovi array: nomDisponibles e prixDisponibles.
  /*  let prixDisponibles = pieces.map(piece => piece.prix); crea un nuovo array prixDisponibles 
    contenente il valore della proprietà prix di ciascun elemento dell'array pieces. 
    In modo simile a prima, viene utilizzata una funzione di callback arrow (piece => piece.prix) 
    per estrarre il valore della proprietà prix da ciascun oggetto piece in pieces e creare un nuovo array con questi valori.**/

    let nomDisponibles = pieces.map(piece => piece.nom);
    let prixDisponibles = pieces.map(piece => piece.prix);

    // In sostanza, questo codice rimuove gli elementi corrispondenti dall'array nomDisponibles 
    // e prixDisponibles se la proprietà disponibilite dell'elemento corrente nell'array pieces è impostata su false.
     for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].disponibilite === false) {
            nomDisponibles.splice(i, 1);
            prixDisponibles.splice(i, 1);
        }


    }
    // creation de la liste
    let disponibleElement = document.createElement("ul");
    // ajouter chaque nom a la liste
    for (let i = 0; i < nomDisponibles.length; i++) {
        let nomElement = document.createElement("li");
        nomElement.innerText = `${nomDisponibles[i]}- ${prixDisponibles[i]} "€"`
        disponibleElement.appendChild(nomElement);

    }
    document.querySelector("#disponible").appendChild(disponibleElement);

    const inputPrixMax = document.querySelector('#prix-max')
    inputPrixMax.addEventListener('input', function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= inputPrixMax.value;
        });
        // Effacement de l'écran et regénération de la page
        document.querySelector("#fiches").innerHTML = "";
        generatePieces(piecesFiltrees);
    })
     ajoutListenersAvis();

}

document.addEventListener("DOMContentLoaded", response().then(generatePieces));//*Aggiunto un modo alternativo per richiamare la promise. 