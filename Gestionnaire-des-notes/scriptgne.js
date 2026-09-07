document.addEventListener("DOMContentLoaded", function() {

  let nomInput = document.getElementById("nom");
  let note1Input = document.getElementById("note1");
  let note2Input = document.getElementById("note2");
  let note3Input = document.getElementById("note3");
  let btnAjouter = document.getElementById("ajouter");
  let tbody = document.getElementById("listeEtudiants");
  let rechercheInput = document.getElementById("recherche");
  let btnExport = document.getElementById("exportCSV");
  let btnImport = document.getElementById("importCSV");

  let listeEtudiants = JSON.parse(localStorage.getItem("etudiants")) || [];
  afficherEtudiants(listeEtudiants);
  calculerStats(); // <-- CALCULER AU CHARGEMENT

  btnAjouter.addEventListener("click", ajouterEtudiant);
  rechercheInput.addEventListener("input", rechercherEtudiant);
  btnExport.addEventListener("click", exporterCSV);
  btnImport.addEventListener("change", importerCSV);

  function sauvegarder(){
    localStorage.setItem("etudiants", JSON.stringify(listeEtudiants));
  }

  function ajouterEtudiant() {
    let nom = nomInput.value.trim();
    let n1 = Number(note1Input.value);
    let n2 = Number(note2Input.value);
    let n3 = Number(note3Input.value);

    if(nom === ""){ alert("Veuillez entrer un nom"); return; }
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)){ alert("Veuillez entrer 3 notes"); return; }
    if(n1 < 0 || n1 > 20 || n2 < 0 || n2 > 20 || n3 < 0 || n3 > 20){
      alert("Les notes doivent être entre 0 et 20");
      return;
    }

    let moyenne = calculerMoyenne(n1, n2, n3);
    let mention = getMention(moyenne);
    let etudiant = { nom: nom, notes: [n1, n2, n3], moyenne: moyenne, mention: mention };

    listeEtudiants.push(etudiant);
    afficherEtudiants(listeEtudiants);
    calculerStats(); // <-- METTRE A JOUR LES STATS
    sauvegarder();
    viderFormulaire();
  }

  function calculerMoyenne(n1, n2, n3){
    let moy = (n1 + n2 + n3) / 3;
    return moy.toFixed(2);
  }

  function getMention(moyenne){
    moyenne = Number(moyenne);
    if(moyenne >= 16) return "Très Bien";
    if(moyenne >= 14) return "Bien";
    if(moyenne >= 10) return "Passable";
    return "Ajourné";
  }

  function getClasseMention(mention){
    if(mention === "Très Bien") return "mention-TB";
    if(mention === "Bien") return "mention-B";
    if(mention === "Passable") return "mention-P";
    return "mention-A";
  }

  function afficherEtudiants(tableau){
    tbody.innerHTML = "";
    if(tableau.length === 0){
      tbody.innerHTML = `<tr><td colspan="7">Aucun étudiant pour le moment</td></tr>`;
      return;
    }
    tableau.forEach(function(etudiant, index){
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${etudiant.nom}</td>
        <td>${etudiant.notes[0]}</td>
        <td>${etudiant.notes[1]}</td>
        <td>${etudiant.notes[2]}</td>
        <td>${etudiant.moyenne}</td>
        <td class="${getClasseMention(etudiant.mention)}">${etudiant.mention}</td>
        <td><button class="btn-suppr" onclick="supprimerEtudiant(${index})">X</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  window.supprimerEtudiant = function(index){
    if(confirm("Voulez-vous vraiment supprimer cet étudiant?")){
      listeEtudiants.splice(index, 1);
      afficherEtudiants(listeEtudiants);
      calculerStats(); // <-- METTRE A JOUR LES STATS
      sauvegarder();
    }
  }

  function rechercherEtudiant(){
    let texte = rechercheInput.value.toLowerCase();
    let resultat = listeEtudiants.filter(function(etudiant){
      return etudiant.nom.toLowerCase().includes(texte);
    });
    afficherEtudiants(resultat);
  }

  function viderFormulaire(){
    nomInput.value = "";
    note1Input.value = "";
    note2Input.value = "";
    note3Input.value = "";
    nomInput.focus();
  }

  // FONCTION EXPORT CSV
  function exporterCSV(){
    if(listeEtudiants.length === 0){ alert("Aucun étudiant à exporter"); return; }
    let csv = "\uFEFFNom,Note 1,Note 2,Note 3,Moyenne,Mention\n";
    listeEtudiants.forEach(function(etudiant){
      csv += `"${etudiant.nom}",${etudiant.notes[0]},${etudiant.notes[1]},${etudiant.notes[2]},${etudiant.moyenne},${etudiant.mention}\n`;
    });
    let url = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    window.open(url, "_blank");
  }

  // FONCTION IMPORT CSV
  function importerCSV(event){
    let fichier = event.target.files[0];
    if(!fichier) return;
    let lecteur = new FileReader();
    lecteur.onload = function(e){
      let contenu = e.target.result;
      let lignes = contenu.split("\n");
      lignes.shift();
      listeEtudiants = [];
      lignes.forEach(function(ligne){
        if(ligne.trim() === "") return;
        let colonnes = ligne.replace(/"/g, '').split(",");
        let nom = colonnes[0];
        let n1 = Number(colonnes[1]);
        let n2 = Number(colonnes[2]);
        let n3 = Number(colonnes[3]);
        let moyenne = calculerMoyenne(n1, n2, n3);
        let mention = getMention(moyenne);
        listeEtudiants.push({ nom, notes: [n1,n2,n3], moyenne, mention });
      });
      afficherEtudiants(listeEtudiants);
      calculerStats(); // <-- METTRE A JOUR LES STATS
      sauvegarder();
      alert("Importation réussie! " + listeEtudiants.length + " étudiants chargés");
    };
    lecteur.readAsText(fichier);
  }

  // 6. NOUVELLE FONCTION STATISTIQUES
  function calculerStats(){
    let totalSpan = document.getElementById("total");
    let moySpan = document.getElementById("moyenneClasse");
    let meilleurSpan = document.getElementById("meilleur");
    let pireSpan = document.getElementById("pire");

    if(listeEtudiants.length === 0){
      totalSpan.textContent = 0;
      moySpan.textContent = "0.00";
      meilleurSpan.textContent = "-";
      pireSpan.textContent = "-";
      return;
    }

    // 1. Total
    totalSpan.textContent = listeEtudiants.length;

    // 2. Moyenne de la classe
    let sommeMoyennes = 0;
    listeEtudiants.forEach(e => sommeMoyennes += Number(e.moyenne));
    let moyenneClasse = (sommeMoyennes / listeEtudiants.length).toFixed(2);
    moySpan.textContent = moyenneClasse;

    // 3. Meilleur et Pire
    let meilleur = listeEtudiants[0];
    let pire = listeEtudiants[0];
    listeEtudiants.forEach(e => {
      if(Number(e.moyenne) > Number(meilleur.moyenne)) meilleur = e;
      if(Number(e.moyenne) < Number(pire.moyenne)) pire = e;
    });
    meilleurSpan.textContent = `${meilleur.nom} - ${meilleur.moyenne}/20`;
    pireSpan.textContent = `${pire.nom} - ${pire.moyenne}/20`;
  }

});