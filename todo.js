let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <i onClick="delete()" class="fas fa-trash">Delete</i>`;
    text.appendChild(newEle);
    input.value = "";
  }
}
newEle.querySelector("i").addEventlistener("click", remove);
function remove() {
  newEle.remove();
}
