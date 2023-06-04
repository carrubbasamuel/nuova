<<<<<<< HEAD
import {ajoutListenersAvis, ajoutListenerEnvoyersAvis} from "./avis.js"

async function response() {
    //   const response = await fetch(" http://localhost:8081/pieces");

      const response = await fetch("pieces-autos.json");
    const pieces = await response.json();
    ajoutListenerEnvoyersAvis();
=======
import { ajoutListenersAvis, ajoutListenerEnvoyerAvis } from "../avis.js";
>>>>>>> 0e4e2efd8c303a251a4064af593b162f58e53bd3


let pieces = localStorage.getItem("pieces");
if (pieces === null) {
    const reponse = await fetch('http://localhost:8081/pieces/');
    const pieces = await reponse.json();
    console.log(pieces);
    let stringify = JSON.stringify(pieces);
    window.localStorage.setItem("pieces", stringify);
} else{
    pieces = JSON.parse(pieces);
}



<<<<<<< HEAD
// Fonction qui génère toute la page web
function generatePieces(pieces) {
   
=======


function genererPieces(pieces){
>>>>>>> 0e4e2efd8c303a251a4064af593b162f58e53bd3
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
<<<<<<< HEAD
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
=======
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
        
        // On rattache la balise article a la section Fiches
>>>>>>> 0e4e2efd8c303a251a4064af593b162f58e53bd3
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
<<<<<<< HEAD
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
=======
        //Code aJouté
        pieceElement.appendChild(avisBouton);
    
     }
>>>>>>> 0e4e2efd8c303a251a4064af593b162f58e53bd3
     ajoutListenersAvis();

     ajoutListenerEnvoyerAvis();
}

genererPieces(pieces);

 //gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

//Code Exercice 
const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}

const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)

const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);  
})


// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
  window.localStorage.removeItem("pieces");
});