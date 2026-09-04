document.addEventListener("DOMContentLoaded", function() {
  let champ = document.getElementById("tache");
  let bouton = document.getElementById("ajouter");
  let liste = document.getElementById("liste");
  let compteur = document.getElementById("compteur");
  let nombreTaches = 0;

  bouton.addEventListener("click", ajouterTache);

  function ajouterTache(){ 
    let texte = champ.value.trim();
    if(texte===""){ alert("Veuillez écrire une tâche."); return; } 
    let li = document.createElement("li");
    li.textContent = texte;
    li.addEventListener("click", function(){ li.classList.toggle("faite"); });
    let btnSuppr = document.createElement("button");
    btnSuppr.textContent = "X";
    btnSuppr.style.marginLeft = "10px";
    btnSuppr.onclick = function(event){
      event.stopPropagation();
      li.remove();
      nombreTaches--;
      compteur.textContent = nombreTaches + " tâche" + (nombreTaches>1?"s":"");
    };
    li.appendChild(btnSuppr);
    liste.appendChild(li);
    nombreTaches++;
    compteur.textContent = nombreTaches + " tâche" + (nombreTaches>1?"s":"");
    champ.value="";
    champ.focus();
  }
});

