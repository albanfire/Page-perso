// ==========================================================
// Ma liste de tâches
// ==========================================================

// Les tâches sont rangées dans ce tableau.
// Chaque tâche est un objet : { texte: "...", faite: true ou false }
let taches = [
  { texte: "Découvrir Git", faite: true },
  { texte: "Terminer le projet P2", faite: false }
];

// Sauvegarde : au démarrage, on récupère les tâches enregistrées
// dans le navigateur (une seule fois, ici, et pas dans afficher()).
const sauvegarde = localStorage.getItem("taches");
if (sauvegarde) {
  taches = JSON.parse(sauvegarde);
}

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

    // Cocher une tâche : un clic sur le texte inverse tache.faite
    texte.addEventListener("click", () => {
      tache.faite = !tache.faite; // ! inverse vrai et faux
      afficher();
    });

    li.appendChild(texte);

    // Supprimer une tâche : un bouton ✕ retire la tâche du tableau
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

  // Compteur : nombre de tâches pas encore faites
  const restantes = taches.filter((t) => !t.faite).length;
  compteur.textContent = restantes + " tâche(s) restante(s)";

  // Sauvegarde : on enregistre le tableau dans le navigateur
  localStorage.setItem("taches", JSON.stringify(taches));
}

// Ajouter une tâche : quand on valide le formulaire
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

// Premier affichage au chargement de la page
afficher();