const btn = document.getElementById("submit");

function getAnswer() {
  var q = document.getElementById("textarea").innerText;
  var questionJS = { question: q };

  console.log(questionJS);

  const response = fetch('http://127.0.0.1:5000/get_answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questionJS)
  });

  // var ans = document.getElementById("answer");
  // ans.style.display = "block";
  // ans.innerHTML = response.text();
  console.log(response);

};

// function displayAlert(text) {
//   var ans = document.getElementById("answer");
//   ans.style.display = "block";
//   ans.innerHTML = text;
// }

btn.addEventListener('click', (event) => {
  event.preventDefault();
  var question = document.getElementById("textarea").innerText;

  getAnswer();
});
