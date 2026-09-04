function recupererNombres() {
  let nombre1 = document.getElementById("nombre1").value.trim();
  let nombre2 = document.getElementById("nombre2").value.trim();
  if (nombre1 === "" || nombre2 === "") {
    document.getElementById("resultat").textContent =
      "Veuillez remplir les deux nombres.";
    return null;
  }
  return {
    a: Number(nombre1),
    b: Number(nombre2)
  };
}

function afficher(message) {
  document.getElementById("resultat").textContent = message;
}

function addition() {
  let nombres = recupererNombres();
  if (nombres === null) {
    return;
  }
  let resultat = nombres.a + nombres.b;
  afficher("Résultat : " + resultat);
}

function soustraction() {
  let nombres = recupererNombres();
  if (nombres === null) {
    return;
  }
  let resultat = nombres.a - nombres.b;
  afficher("Résultat : " + resultat);
}

function multiplication() {
  let nombres = recupererNombres();
  if (nombres === null) {
    return;}
  let resultat = nombres.a * nombres.b;
   afficher("Résultat : " + resultat);
}

function division() {
  let nombres = recupererNombres();
  if (nombres === null) { return;}
  if (nombres.b === 0){ document.getElementById("resultat").textContent = "Impossible de diviser par zéro.";return}
  let resultat = nombres.a / nombres.b;
  document.getElementById("resultat").textContent = "Résultat : " + resultat.toFixed(2);
}

function modulo() {
  let nombres = recupererNombres();
  if (nombres === null) {return;}
  let resultat = nombres.a % nombres.b;
  afficher("Résultat : " + resultat);
}

function puissance() {
  let nombres = recupererNombres();
  if (nombres === null) {return;}
  let resultat = nombres.a ** nombres.b;
   afficher("Résultat : " + resultat);
}

function effacer() {
  document.getElementById("nombre1").value = "";
  document.getElementById("nombre2").value = "";
  document.getElementById("montant").value = "";
  document.getElementById("resultat").textContent = "Résultat :";
  document.getElementById("nombre1").focus();
}

function convertir() {
  let montant = document.getElementById("montant").value.trim();
  if (montant === ""){document.getElementById("resultat").textContent = "Veuillez saisir un montant."; return;}
  const TAUX_EURO = 650
  let resultat = montant / TAUX_EURO;
  document.getElementById("resultat").textContent = "Résultat : " + resultat.toFixed(2) + " €";
}

function convertir$() {
  let montant = document.getElementById("montant").value.trim();
  if (montant === ""){document.getElementById("resultat").textContent = "Veuillez saisir un montant."; return;}
  const TAUX_DOLLAR = 600;
  let resultat = montant / TAUX_DOLLAR;
  document.getElementById("resultat").textContent = "Résultat : " + resultat.toFixed(2) + " $";
}