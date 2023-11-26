// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
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
const db = getDatabase();

var question = document.getElementById("question");
var option = document.getElementById("option");
var optionParents = document.getElementById("optionParents");
var correctAnswerElem = document.getElementById("correctAnswer");

var options = [];
var correctAnswer;

function renderOptions() {
  optionParents.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionParents.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2' >${options[i]}</li>`;
  }
}

window.addoption = function () {
  options.push(option.value);
  console.log(options);
  renderOptions();
};

window.setCorrectAnswer = function (a) {
  correctAnswer = a;
  correctAnswerElem.innerHTML = correctAnswer;
};

window.submitquestion = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer,
  };

  obj.id = push(ref(db, 'questions/')).key;

  const reference = ref(db, `questions/${obj.id}`);
  set(reference, obj);

  console.log(obj);
};
