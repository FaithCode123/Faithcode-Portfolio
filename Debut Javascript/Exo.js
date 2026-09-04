let nombre = Number(prompt("note"))
for(let i = 1; i <= 10; i++){
  console.log(nombre + " x " + i + " = " + nombre * i);
}
for(let i = 1; i <= 5; i++){
  console.log("bonjour")
}
let k = 1;
while(k <= 5){
  console.log(k);
k++;
}
function bienvenue () {
  let note = Number(prompt("Vous avez eu combien de moyenne pour l'examen ?"));
  if (note >=10){alert("Vous êtes admis !");} else{alert("Ajourné");}
}
bienvenue();

function perimetre(long, large) {
    return 2*(long + large);
    
}
let resultat = perimetre(14, 11)
alert(resultat);

// Exercice
let prenoms = ["Paul", "Pierre", "Jean", "Faith"]

console.log(prenoms[prenoms.length-1]);
let eleve = {

    nom: "GNAMBODE",

    prenom: "Chédrack",

    age: 22,

    classe: "Licence"

};
console.log(eleve.nom)

let voitures = {
  nom : "Chédrack",
  marque : "Toyota",
  modele : "Rav 4",
  annee : "2015",
  direbonjour : function(){
    alert("Bienvenue " + this.nom)
  }
 
}
 voitures.marque = "Nissan";
 voitures.prix = "1200000";
console.log(voitures.marque);
console.log(voitures.modele);
console.log(voitures.annee);
console.log(voitures.prix);
voitures.direbonjour();

let etudiants = [{
  nom : "Jean",
  age : 22
  
},
{ nom : "Jacques",
age : 26}
  ];
  for(let etudiant of etudiants){
  console.log(etudiant.nom);}
  
  let eleves = {
    nom: "GNAMBODE",
    prenom: "Chédrack",
    age: 22,
    note: [12, 9, 16, 19],
    moyenne : function(){
    let somme = 0;
    for(let n of this.note){
    somme = somme + n;}
    return somme/this.note.length;
    }
};
for(let cle in eleves){
  if(cle!=="moyenne")
    console.log(cle + " : " + eleves[cle]);
}
console.log("Moyenne : " + eleves.moyenne());


// Defi 1
let professeur = {
  nom : "GNAMBODE",
  prenom : "Chédrack",
  matiere : "mathematiques",
  anciennete : "7 ans",
  bonjour : function() {
    alert("Je suis professeur de " + this.matiere)
  }
}
professeur.bonjour();


let titre = document.getElementById("titre").textContent = "Bienvenue sur mon site";
let message = document.getElementById("message");
message.innerHTML = message.innerHTML.replace("monde","<strong>monde</strong>");
titre = document.getElementById("titre");
titre.style.color = "white";
titre.style.fontSize = "40px";
titre.style.backgroundColor = "green";
titre.style.padding = "20px";
titre.style.borderRadius = "10px";
let text = document.getElementById("text").classList.add("important");
let estChange = false;
function changer(){
  if(estChange === false){
    titre.textContent = "Bonjour Chédrack";
    titre.style.backgroundColor = "blue"
    estChange = true;
  }else {
    titre.textContent = "Bienvenue sur mon site";
    titre.style.backgroundColor = "green";
    estChange = false;
  }
}
message = document.getElementById("message");
message.style.color = "blue";
let photo = document.getElementById("photo");
photo.style.width = "250px";
photo = document.getElementById("photo");
let estChanger = false;
function change(){
  if(estChanger === false){
    photo.src = "photocg.png";
    photo.style.backgroundColor = "blue";
    estChanger = true;
  }else {
    photo.src = "logogcn.png";
    photo.style.backgroundColor = "green";
    estChanger = false;
  }
}

let aujourdhui = new Date();
function date(){
  document.getElementById("aujourdhui").textContent = new Date();
}

let citations = [
"Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.  Winston Churchill",
"Le succès demande du travail.",
"Travaillez dur en silence. Laissez votre succès faire du bruit.",
"N'abandonne jamais.",
"Le succès n’est pas final, l’échec n’est pas fatal.  Winston Churchill",
"Chaque jour est une nouvelle chance.",
"Commence petit, mais pense grand.",
"L'expérience est le meilleur professeur.",
"Le succès appartient à ceux qui se lèvent tôt et codent tard. Version Dev 😎."
];
function nouvelleCitation(){
let index = Math.floor(Math.random()*citations.length);
document.getElementById("citation").textContent = citations[index];
}

let bouton = document.getElementById("btn");
bouton.addEventListener("dblclick", function(){
  alert("Double click détecté");
});

titre = document.getElementById("titre");
titre.addEventListener("mouseout", function(){
  titre.style.color = "black";
});

let ville = document.getElementById("ville");
ville.addEventListener("change", function(){
  alert("ville choisi : "+ ville.value)
});

let champ = document.getElementById("fcfa");
champ.addEventListener("input", function(){
  let montant = Number(champ.value);
  let resultat = montant/655.95;
  document.getElementById("euro").textContent = resultat.toFixed(2) + " €";
})