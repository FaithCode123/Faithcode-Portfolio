document.addEventListener("DOMContentLoaded", function() {
  const champ = document.getElementById("tache");
  const bouton = document.getElementById("ajouter");
  const liste = document.getElementById("liste");
  const compteur = document.getElementById("compteur");
  const btnEffacer = document.getElementById("effacer");
  const filtresBtn = document.querySelectorAll(".filtre");

  // 1. CHARGEMENT depuis localStorage
  let taches = JSON.parse(localStorage.getItem("taches")) || [];
  let filtreActuel = "toutes";

  function sauvegarder() {
    localStorage.setItem("taches", JSON.stringify(taches));
  }

  function afficher() {
    liste.innerHTML = "";

    // Filtrage
    let tachesAffichees = taches.filter(t => {
      if (filtreActuel === "actives") return !t.faite;
      if (filtreActuel === "terminees") return t.faite;
      return true;
    });

    tachesAffichees.forEach((tache) => {
      // On récupère le vrai index dans le tableau original
      let vraiIndex = taches.indexOf(tache);

      let li = document.createElement("li");
      if (tache.faite) li.classList.add("faite");

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = tache.faite;
      checkbox.onchange = () => {
        taches[vraiIndex].faite = checkbox.checked;
        sauvegarder();
        afficher();
      };

      let span = document.createElement("span");
      span.textContent = tache.texte;

      let btnSuppr = document.createElement("button");
      btnSuppr.textContent = "✕";
      btnSuppr.onclick = (e) => {
        e.stopPropagation();
        taches.splice(vraiIndex, 1);
        sauvegarder();
        afficher();
      };

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(btnSuppr);
      liste.appendChild(li);
    });

    // Compteur pro : "2 restantes"
    let restantes = taches.filter(t => !t.faite).length;
    compteur.textContent = restantes === 0 
      ? "Tout est fait ! 🎉" 
      : `${restantes} tâche${restantes > 1 ? "s" : ""} restante${restantes > 1 ? "s" : ""}`;
  }

  function ajouterTache() {
    let texte = champ.value.trim();
    if (texte === "") {
      alert("Veuillez écrire une tâche.");
      return;
    }
    taches.push({ texte: texte, faite: false });
    sauvegarder();
    afficher();
    champ.value = "";
    champ.focus();
  }

  // EVENTS
  bouton.addEventListener("click", ajouterTache);
  champ.addEventListener("keydown", (e) => {
    if (e.key === "Enter") ajouterTache();
  });

  filtresBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filtre.active")?.classList.remove("active");
      btn.classList.add("active");
      filtreActuel = btn.dataset.filtre;
      afficher();
    });
  });

  btnEffacer.addEventListener("click", () => {
    taches = taches.filter(t => !t.faite);
    sauvegarder();
    afficher();
  });

  // Premier affichage
  afficher();
});

