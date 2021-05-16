const Quiz = {

   quizConstruction(counterQuestion) {
      console.log("AQUI", counterQuestion)


      let question = questionRandom[counterQuestion].question
      console.log("questions no quiz ", question)
      
      let answers = questionRandom[counterQuestion].answers
      let quiz = document.querySelector('.container')
      
      quiz.innerHTML = `
      <div class="question">
            <h2>${question}</h2>
         </div>
         <div class="answers">
            <div class="answer">
               <div class="textAnswer">${answers[0].a}</div>
            </div>
            <div class="answer">
               <div class="textAnswer">${answers[1].b}</div>
            </div>
            <div class="answer">
               <div class="textAnswer">${answers[2].c}</div>
            </div>
            <div class="answer">
               <div class="textAnswer">${answers[3].d}</div>
            </div>
         </div>
      `
      DetecterClick.detecter(counterQuestion)
   }

}

const questions = [
   {
      question: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
      answers: [
         {a: "Tem entre 2 a 4 litros. São retirados 450 mililitros", correct: false},
         {b: "Tem entre 4 a 6 litros. São retirados 450 mililitros", correct: true},
         {c: "Tem 10 litros. São retirados 2 litros", correct: false},
         {d: "Tem 7 litros. São retirados 1,5 litros", correct: false}]
   },
   {
      question: "De quem é a famosa frase “Penso, logo existo”?",
      answers: [
         {a: "Platão", correct: false},
         {b: "Galileu Galilei", correct: false},
         {c: "Descartes", correct: true},
         {d: "Sócrates", correct: false}]
   },
   {
      question: "De onde é a invenção do chuveiro elétrico?",
      answers: [
         {a: "França", correct: false},
         {b: "Inglaterra", correct: false},
         {c: "Brasil", correct: true},
         {d: "Japão  ", correct: false}]
   },
   {
      question: "Quais o menor e o maior país do mundo?",
      answers: [
         {a: "Vaticano e Rússia", correct: true},
         {b: "Nauru e China", correct: false},
         {c: "Mônaco e Canadá", correct: false},
         {d: "Malta e Estados Unidos", correct: false}]
   },
   {
      question: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
      answers: [
         {a: "Jânio Quadros", correct: false},
         {b: "Jacinto Anjos", correct: false},
         {c: "Getúlio Vargas", correct: false},
         {d: "João Goulart", correct: true}]
   }
]


const NextQuestion = {
   nextQuestion() {
      if(questionRandom.length == counterQuestion) {
         setTimeout(this.finishPage, 1000);         
      }  
        
      Quiz.quizConstruction(counterQuestion)
      console.log("AQUI")
   
      counterQuestion++
   },
   finishPage() {
      window.location.href = "finish.html";
   }
}


const DetecterClick = {
   
   detecter(counterQuestion) {

      let answers = document.querySelectorAll(".answer")
      answers.forEach(function (element, index) {
      
         localStorage.setItem("questionsTotal", counterQuestion + 1) 
         element.onclick = () => {

            if(questionRandom[counterQuestion].answers[index].correct == true) {
               colorAnswers.right(element)
               Points.calcPoints()
               setTimeout(nextQuestions, 1000);
            }else {
               colorAnswers.wrong(element)
               setTimeout(nextQuestions, 1000);
            }

            function nextQuestions(){
               NextQuestion.nextQuestion()
            }
         }
      });
   }
}

const colorAnswers = {
   right(divAnswer) {
      divAnswer.style.backgroundColor = 'green'
   },
   wrong(divAnswer) {
      divAnswer.style.backgroundColor = 'red'
   }
}

const Points = {
   
   calcPoints() {
      points++
      Points.updatePoints(points)
   },
   updatePoints(points) {
      const pointDiv = document.querySelector('.points')

      pointDiv.innerHTML = points
      localStorage.setItem("points", points)
   }
}

const questionRandom = []

const RandomQuestions = {
   random() {

      while (questions.length) {
         const index = Math.floor(Math.random() * questions.length - 1);
         const [option] = questions.splice(index, 1);
         questionRandom.push(option);
      }
      NextQuestion.nextQuestion()
   }
}

const Timer = {
   chronometer() {
      const chronometer = document.querySelector("#chronometer")
      const minutes = document.querySelector("#minutes")
      const seconds = document.querySelector("#seconds")
      secondsCounter = 0
      minutesCounter = 0

      intervel = setInterval(function () {
         secondsCounter++
         if (secondsCounter/60 == 1) {
            secondsCounter = 0
            minutesCounter++
         }

         if (secondsCounter < 10) {
            seconds.innerHTML = "0" + secondsCounter
         } else if (minutesCounter < 10) {
            minutes.innerHTML = "0" + minutesCounter
         } else {
            seconds.innerHTML = secondsCounter
            minutes.innerHTML = minutesCounter
         }
         
         console.log(secondsCounter)
         console.log(minutesCounter)
         
      },1000)
   }
}


let points = 0
let counterQuestion = 0

const QuizInit = {
   start() {
      Timer.chronometer()
      RandomQuestions.random()
   }
}

QuizInit.start()
