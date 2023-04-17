let canvas = document.querySelector("#canvas");
let Note_draggable = document.getElementById("Note");
import { deleteElement } from "./Trash.js";

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

Note_draggable.addEventListener("dragend", (e) => {
  creating_NewNote(e.x, e.y);
  dragging_CreatedNote();
});

function dragging_CreatedNote() {
  let Drag_Note = document.querySelectorAll(".NOTE");
  Drag_Note.forEach((Drag_Note) => {
    Drag_Note?.addEventListener("drag", (e) => {
      // Trash_bin.classList.remove("deleteEffect");
      Drag_Note.classList.add("draggingEffect");
      Drag_Note.style.left = `${e.x}px`;
      Drag_Note.style.top = `${e.y}px`;
    });

    Drag_Note?.addEventListener("dragend", (e) => {
      Drag_Note.classList.remove("draggingEffect");
      Drag_Note.style.left = `${e.x}px`;
      Drag_Note.style.top = `${e.y}px`;
      deleteElement(e.x, e.y, Drag_Note);
    });
  });
}

function creating_NewNote(x, y) {
  const div = document.createElement("div");
  const textarea = document.createElement("textarea");
  div.appendChild(textarea);
  div.classList.add("NOTE");
  div.setAttribute("draggable", true);
  canvas.appendChild(div);
  div.style.position = "fixed";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
}
