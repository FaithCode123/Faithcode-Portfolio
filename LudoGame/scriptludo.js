const plateau = document.getElementById('plateau');
const btnDe = document.getElementById('btn-de');
const de = document.getElementById('de');
const message = document.getElementById('message');

const couleurs = ['rouge', 'vert', 'bleu', 'jaune'];
const couleursHex = {rouge:'#ef4444', vert:'#22c55e', bleu:'#3b82f6', jaune:'#eab308'};
let joueur = 0;
let valeur = 0;
let peutJouer = true;
let aJoueCeTour = false; // IMPORTANT: pour savoir si on a joué

// État: -1 = maison, 0-51 = sur plateau
const pions = { rouge: [-1,-1,-1,-1], vert: [-1,-1,-1,-1], bleu: [-1,-1,-1,-1], jaune: [-1,-1,-1,-1] };
const depart = {rouge: 0, vert: 13, bleu: 26, jaune: 39};
const maisonPos = {rouge: [1,3,16,18], vert: [10,12,25,27], bleu: [199,201,214,216], jaune: [208,210,223,225]};

function creerPlateau() {
  for(let i = 0; i < 225; i++) {
    const div = document.createElement('div');
    div.className = 'case';
    div.id = 'c' + i;
    if(i < 36) div.classList.add('rouge-bg');
    else if(i < 72) div.classList.add('vert-bg');
    else if(i >= 153 && i < 189) div.classList.add('bleu-bg');
    else if(i >= 189) div.classList.add('jaune-bg');
    plateau.appendChild(div);
  }
  afficherPions();
}

function afficherPions() {
  document.querySelectorAll('.pion').forEach(p => p.remove());
  couleurs.forEach(c => {
    pions[c].forEach((pos, id) => {
      const pion = document.createElement('div');
      pion.className = 'pion';
      pion.style.background = couleursHex[c];
      pion.onclick = () => deplacer(c, id);
      const caseId = pos === -1? maisonPos[c][id] : depart[c] + pos;
      if(caseId < 225) document.getElementById('c' + caseId).appendChild(pion);
    });
  });
}

btnDe.onclick = () => {
  if(!peutJouer) return;
  peutJouer = false;
  btnDe.disabled = true;
  aJoueCeTour = false;
  de.classList.add('lancer');

  setTimeout(() => {
    valeur = Math.floor(Math.random() * 6) + 1;
    de.textContent = valeur;
    de.classList.remove('lancer');

    const c = couleurs[joueur];
    const peutSortir = pions[c].includes(-1) && valeur === 6;
    const peutBouger = pions[c].some(p => p >= 0);

    if(!peutSortir &&!peutBouger) {
      message.textContent = "Aucun coup. Tour suivant.";
      setTimeout(changerJoueur, 1500);
    } else {
      message.textContent = "Clique sur un pion!";
      // Rendre les pions jouables clignotants
      pions[c].forEach((p,i) => {
        if((p===-1 && valeur===6) || p>=0) {
          const caseId = p === -1? maisonPos[c][i] : depart[c] + p;
          const pion = document.querySelector(`#c${caseId}.pion`);
          if(pion) pion.classList.add('jouable');
        }
      });
    }
  }, 500);
}

function deplacer(couleur, id) {
  if(couleurs[joueur]!== couleur || aJoueCeTour) return;

  document.querySelectorAll('.pion').forEach(p => p.classList.remove('jouable'));
  aJoueCeTour = true;

  let aMange = false;
  if(pions[couleur][id] === -1 && valeur === 6) {
    pions[couleur][id] = 0; // sort à la position 0
    message.textContent = `${couleur} sort un pion!`;
  } else if(pions[couleur][id] >= 0) {
    pions[couleur][id] += valeur;
    message.textContent = `${couleur} avance de ${valeur}`;
    if(pions[couleur][id] > 51) pions[couleur][id] = 51; // bloque à la fin
  }

  afficherPions();

  // LOGIQUE DU 6: si 6 ou on mange, on rejoue. Sinon on change
  if(valeur === 6 || aMange) {
    message.textContent += " Rejoue!";
    peutJouer = true;
    btnDe.disabled = false;
  } else {
    setTimeout(changerJoueur, 1000);
  }
}

function changerJoueur() {
  joueur = (joueur + 1) % 4;
  document.querySelectorAll('.joueur').forEach(j => j.classList.remove('actif'));
  document.getElementById('j-' + couleurs[joueur]).classList.add('actif');
  message.textContent = `Au tour de ${couleurs[joueur]}`;
  peutJouer = true;
  btnDe.disabled = false;
  de.textContent = '?';
  valeur = 0;
}

creerPlateau();
