const btn = document.getElementById("submit")

function displayAlert(text) {
  // Display an alert box with a message
  alert(text);
}

btn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form from submitting and refreshing the page
  var question = document.getElementById("textarea").innerText;
  // Call the displayAlert function
  displayAlert(question);
});
