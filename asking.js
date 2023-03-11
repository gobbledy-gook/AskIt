const btn = document.getElementById("submit");

function getAnswer() {
  var q = document.getElementById("textarea").innerText;
  var questionJS = { question: q };
  console.log(questionJS);

  fetch("http://127.0.0.1:5000/get_answer", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(questionJS)  // The JSON data you want to send
  })
    .then(response => {
      console.log(response);
      console.log("hello");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      var ans = document.getElementById("answer");
      ans.style.display = "block";
      ans.style.overflowY = "scroll";
      ans.innerHTML = data.answer;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  // console.log(response);

};

// function displayAlert(text) {
//   var ans = document.getElementById("answer");
//   ans.style.display = "block";
//   ans.innerHTML = text;
// }

btn.addEventListener('click', (event) => {
  event.preventDefault();
  getAnswer();
});
