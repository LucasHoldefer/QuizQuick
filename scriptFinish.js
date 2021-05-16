const finalScore = document.querySelector('h1')
const h2 = document.querySelector('#questionRight')

let pointsText = ""
if(localStorage.getItem("points") > 1) {
   pointsText = "PONTOS"
}else {
   pointsText = "PONTO"
}

h2.innerHTML = `Você acertou ${localStorage.getItem("points")} de ${localStorage.getItem("questionsTotal")}`

finalScore.innerHTML = `${localStorage.getItem("points")} ${pointsText}`