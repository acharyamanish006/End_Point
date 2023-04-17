import { Note } from "./addElement.js";

let drag = document.querySelectorAll(".draggable");

drag.forEach((drag) => {
  drag.addEventListener("dragstart", (e) => {
    console.log(e);
    console.log("DS");
  });
});

//to add Note
let Note_draggable = document.getElementById("Note");
Note_draggable.addEventListener("dragend", (e) => {
  Note(e.x, e.y);
  let Drag_Note = document.querySelectorAll(".NOTE");
  console.log(Drag_Note);
  Drag_Note.forEach((Drag_Note) => {
    Drag_Note?.addEventListener("dragend", (e) => {
      Drag_Note.style.left = `${e.x}px`;
      Drag_Note.style.top = `${e.y}px`;
    });
  });
});

//to add link
let Link_draggable = document.getElementById("Link");
Link_draggable.addEventListener("dragend", (e) => {
  console.log("link added");
});

//to add line
let Line_draggable = document.getElementById("Line");
Line_draggable.addEventListener("dragend", (e) => {
  console.log("line added");
});

//to add todo
let Todo_draggable = document.getElementById("Todo");
Todo_draggable.addEventListener("dragend", (e) => {
  console.log("todo added");
});

//to delete element
let Trash_draggable = document.getElementById("Trash");
Trash_draggable.addEventListener("dragend", (e) => {
  console.log("element deleted");
});

///
let Drag_Note = document.querySelectorAll(".NOTE");
Drag_Note.forEach((Drag_Note) => {
  // dragElement(document.getElementById("mydiv"));
  // console.log(Drag_Note)
  dragElement(Drag_Note);
});
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  // if (document.getElementById(elmnt.id + "header")) {
  //   // if present, the header is where you move the DIV from:
  //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  // } else {
  //   // otherwise, move the DIV from anywhere inside the DIV:
  //   elmnt.onmousedown = dragMouseDown;
  // }
  // console.log(elmnt.onmousedown);

  let dragging = false;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    console.log(e);
    dragging = true;
    // if (elmnt.onmousemove) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    elmnt.classList.add("draggingEffect");

    // }
  }

  function elementDrag(e) {
    if (dragging) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    } else {
      closeDragElement();
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    elmnt.classList.remove("draggingEffect");
    dragging = false;
    elmnt.classList.add("dropEffect");
    setTimeout(() => {
      elmnt.classList.remove("dropEffect");
    }, 100);
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
