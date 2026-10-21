// ==========================================================
// Ma liste de tâches
// Chaque fonctionnalité correspond à une issue et à une branche.
// Cherche les commentaires « TODO » : c'est là que tu travailles.
// ==========================================================

// Les tâches sont rangées dans ce tableau.
// Chaque tâche est un objet : { texte: "...", faite: true ou false }
let taches = [
  { texte: "Découvrir Git", faite: true },
  { texte: "Terminer le projet P2", faite: false }
];

// TODO issue « Sauvegarder les tâches » :
// au démarrage, récupérer les tâches enregistrées dans le navigateur.

// On récupère les éléments de la page dont on a besoin.
const liste = document.getElementById("liste");
const formulaire = document.getElementById("formulaire");
const champ = document.getElementById("champ");
const compteur = document.getElementById("compteur");

// Affiche toutes les tâches dans la liste.
// On l'appelle à chaque fois que le tableau « taches » change.
function afficher() {
  liste.innerHTML = "";

  taches.forEach((tache, index) => {
    const li = document.createElement("li");
    const texte = document.createElement("span");
    texte.textContent = tache.texte;

    if (tache.faite) {
      li.classList.add("faite");
    }

    // TODO issue « Cocher une tâche terminée » :
    // un clic sur le texte inverse tache.faite, puis réaffiche.
    texte.addEventListener("click", () => {
     tache.faite = !tache.faite; // ! inverse vrai et faux
    afficher();
  });

    li.appendChild(texte);

    // TODO issue « Supprimer une tâche » :
    // ajouter un bouton ✕ qui retire la tâche du tableau, puis réaffiche.
    const bouton = document.createElement("button");
    bouton.textContent = "✕";
    bouton.className = "supprimer";
    bouton.addEventListener("click", () => {
      taches.splice(index, 1); // retire 1 élément à la position index
      afficher();
  });
  li.appendChild(bouton);

    liste.appendChild(li);
  });

  // TODO issue « Afficher le compteur » :
  // écrire dans « compteur » le nombre de tâches pas encore faites.

  // TODO issue « Sauvegarder les tâches » :
  // enregistrer le tableau dans le navigateur.
}

// TODO issue « Ajouter une tâche » :
// quand on valide le formulaire, ajouter le texte du champ au tableau,
// vider le champ, puis réafficher.

formulaire.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche la page de se recharger
  const texte = champ.value.trim();
  if (texte === "") {
    return; // on n'ajoute pas une tâche vide
  }
  taches.push({ texte: texte, faite: false });
  champ.value = "";
  afficher();

});
afficher();
