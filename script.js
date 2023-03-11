// get the container and add button elements
const container = document.getElementsByClassName("monday");
const addBtn = document.getElementsByClassName("add-btn");

// add a click event listener to the add button
addBtn.addEventListener("click", function() {
  // create a new div element
  const newDiv = document.createElement("div");
  // add some content to the new div
  newDiv.textContent = "New Div";
  newDiv.setAttribute("class","cell");
  // insert the new div before the add button
  container.insertBefore(newDiv, addBtn);
  container.appendChild(newDiv);
});
