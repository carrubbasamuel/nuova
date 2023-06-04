<<<<<<< HEAD

export function ajoutListenersAvis() {
    let piecesElements = document.querySelectorAll("#fiches aricle button");
    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            //  let id = event.target.dataset.id;
            //  const response = await fetch(`http://localhost:8081/pieces/${id}/avis` );
             const response = await fetch("avis.json");
            const avis = await response.json();
            const pieceElement = event.target.parentElement

            const avisElement = document.createElement("P");
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `${avis[i].utilisateur}: ${avis[i].commentaire} <br>`;

            }
            pieceElement.appenchild(avisElement);

        });

    }
}
   
export function ajoutListenerEnvoyersAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit",  function (event) {
        event.preventDefault();
        const avis = {
            pieceId: parseInt(event.target.querySelector("#piece-Id").value),
            utilisateur: event.target.querySelector("#utilisateur").value,
            commentaire: event.target.querySelector("#commentaire").value,

        };
        const chargeUtile = JSON.stringify(avis);
        // fetch("http://localhost:8081/avis", {
         fetch("avis.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },  
            body: chargeUtile,

            });
        
       
    });
}
=======
export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
 
        const id = event.target.dataset.id;
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
        const avis = await reponse.json();
        const pieceElement = event.target.parentElement;

        const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
 
     });
 
    }
 
}



export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();
        // Création de l’objet du nouvel avis.
        const avis = {
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
        };

        // Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(avis);

        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        });

 
    });
}

>>>>>>> f0b7ff830a2758a9ec3d976650ce0f402c7f3a3b
