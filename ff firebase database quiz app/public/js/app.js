// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onChildAdded,
  push,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACBvwvyejZFaJXHIQ513TgFfFaWcBG5oY",
    authDomain: "quizapp-2924a.firebaseapp.com",
    databaseURL: "https://quizapp-2924a-default-rtdb.firebaseio.com",
    projectId: "quizapp-2924a",
    storageBucket: "quizapp-2924a.appspot.com",
    messagingSenderId: "993625992666",
    appId: "1:993625992666:web:fa27bce3261cc77bb324e3",
    measurementId: "G-72N8PLVKSB"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getDatabase();

function getdataformDatabase() {
  var refrence = ref(db, 'questions/');
  onChildAdded(refrence, function (data) {
    // console.log(data.val());
    question.push(data.val());
    renderQuestion();
  });
}
getdataformDatabase();

var question = [
  {
    question: "HTML Stands for ______________",
    options: ["HTML", "HMTL", "Hypertext Markup Language", "HTML"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "CSS Stands for ______________",
    options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "JS Stands for ______________",
    options: ["JS", "JS", "JavaScript", "JS"],
    correctAnswer: "JavaScript",
  },
  {
    question: "RAM Stands for ______________",
    options: ["RAM", "Round Acess Memory", "Random Access Memory"],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet? ______________",
    options: ["css","src","script","style"],
    correctAnswer: "style",
  },
  {
    question: "is HTML is Programming Language?",
    options: ["YES", "NO"],
    correctAnswer: "NO",
  },
];

var indexvl = 0;
var Mark = 0;

var QuerentQueetion = document.getElementById("QuerentQueetion");
var totalQueation = document.getElementById("totalQueation");
var displayQueastion = document.getElementById("displayQueastion");
var optionQuestion = document.getElementById("optionQuestion");

window.renderQuestion = function () {
  var que = question[indexvl];
  displayQueastion.innerHTML = que.question;
  totalQueation.innerHTML = 6;
  QuerentQueetion.innerHTML = indexvl + 1;

  optionQuestion.innerHTML = "";
  for (var i = 0; i < que.options.length; i++) {
    optionQuestion.innerHTML += `<div class="col-md-6 mb-3">
    <button class="p-3 text-center hover btn btn-outline-light text-white rounded-pill ok  fs-2 w-100" onclick ="checkAns('${que.correctAnswer}', '${que.options[i]}')" class="bg-info-subtle w-100 p-3  a">${que.options[i]}</button>
</div>
`;
  }
};
var buttondiv = document.getElementById("buttondiv");
window.renderQuestionqqq = function () {
  if (totalQueation.innerHTML === QuerentQueetion.innerHTML) {
    var button = document.createElement("button");
    var btnVal = document.createTextNode("Submit");
    button.appendChild(btnVal);
    buttondiv.appendChild(button);
    button.setAttribute("class", "btn  btn-outline-success bg-success px-3 py-3");

    button.setAttribute("onclick", "result()");
  } else {
    indexvl++;
    renderQuestion();
  }
};

var main = document.getElementById("main");
var mainunder = document.getElementById("mainunder");

window.result = function () {
  main.innerHTML = "";
  var h3 = document.createElement("h3");
  var h3val = document.createTextNode(
    "Your Quiz Is Your Result " + Mark + " Mark"
  );
  h3.appendChild(h3val);
  mainunder.appendChild(h3);
  h3.setAttribute("class", "bg-white   rounded text-success py-3  ");
};

window.checkAns = function (a, b) {
  if (a == b) {
    Mark++;
  }
  // console.log(Mark);
  renderQuestionqqq();
};
// renderQuestion();
