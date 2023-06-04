
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
