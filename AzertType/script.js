function afficherResultat(score, nbmotproposes){
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbmotproposes}`
    spanScore.innerText = affichageScore
}

function afficherEmail(nom, email, score) {
    let sujet = "Partage du score Azertype"
    let corps = `Salut, je suis ${nom} et je viens d'obtenir la note ${score} sur le jeu Azertype`
    let mailto = `mailto:${email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`
    location.href = mailto
}

function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

function validerNom(nom) {
    return nom.length >= 2
}

function validerEmail(email) {
    let emailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/i
    return emailRegExp.test(email)
}

function lancerJeu(){
    let score = 0
    let i = 0
    let listeProposition = listeMots
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listeProposition[i])
    afficherResultat(score, i)

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listeProposition[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ""

        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini!")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++){
        listeBtnRadio[index].addEventListener("change", (event) => {
            if (event.target.value === "1"){
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            i = 0 // reset quand on change
            score = 0
            btnValiderMot.disabled = false
            afficherResultat(score, i)
            afficherProposition(listeProposition[i])
        })
    }

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        let nomEstValide = validerNom(nom)
        let emailEstValide = validerEmail(email)

        // Gestion du style d'erreur
        baliseNom.classList.toggle("error",!nomEstValide)
        baliseEmail.classList.toggle("error",!emailEstValide)

        if(nomEstValide && emailEstValide) {
            let emailScore = `${score}/${i}`
            afficherEmail(nom, email, emailScore)
        }
    })
}