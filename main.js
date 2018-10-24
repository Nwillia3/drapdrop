const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//fill listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop through empties and call drag event

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

//Drag Functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault(); // to prevent the default behavior in order for the dragDrop to run
}
function dragEnter(e) {
  e.preventDefault(); // to prevent the default as first
  this.className += " hovered"; // this append to the class
}
function dragLeave() {
  this.className = "empty"; // this replaces the exisitng class name
}
function dragDrop() {
  this.append(fill); // adds the entire element
}
