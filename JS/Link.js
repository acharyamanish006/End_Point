let canvas = document.querySelector("#canvas");
let Link_draggable = document.getElementById("Link");
import { deleteElement } from "./Trash.js";

Link_draggable.addEventListener("dragend", (e) => {
  createInputField(e.x, e.y);
  dragging_inputField();
});

function dragging_inputField() {
  let InputField = document.querySelectorAll(".InputField");
  InputField.forEach((InputField) => {
    InputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        InputField.remove();
        Creating_Link(
          e.target.value,
          InputField.style.left,
          InputField.style.top
        );
      }
    });
    InputField?.addEventListener("drag", (e) => {
      InputField.classList.add("draggingEffect");
      InputField.style.left = `${e.x}px`;
      InputField.style.top = `${e.y}px`;
    });

    InputField?.addEventListener("dragend", (e) => {
      InputField.classList.remove("draggingEffect");
      InputField.style.left = `${e.x}px`;
      InputField.style.top = `${e.y}px`;
      deleteElement(e.x, e.y, InputField);
    });
  });
}
function dragging_CreatedLink() {
  let Drag_Link = document.querySelectorAll(".Link");
  Drag_Link.forEach((Drag_Link) => {
    Drag_Link?.addEventListener("drag", (e) => {
      Drag_Link.classList.add("draggingEffect");
      Drag_Link.style.left = `${e.x}px`;
      Drag_Link.style.top = `${e.y}px`;
    });

    Drag_Link?.addEventListener("dragend", (e) => {
      Drag_Link.classList.remove("draggingEffect");
      Drag_Link.style.left = `${e.x}px`;
      Drag_Link.style.top = `${e.y}px`;
      deleteElement(e.x, e.y, Drag_Link);
    });
  });
}

function createInputField(x, y) {
  let div = document.createElement("div");
  let Link_input = document.createElement("input");
  Link_input.setAttribute("type", "text");
  div.classList.add("InputField");
  div.setAttribute("draggable", true);
  div.setAttribute("draggable", true);
  div.appendChild(Link_input);
  canvas.appendChild(div);
  div.style.position = "fixed";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
}

function Creating_Link(link, x, y) {
  let div = document.createElement("div");
  let aTag = document.createElement("a");
  aTag.innerText = link;
  div.classList.add("Link");
  div.setAttribute("draggable", true);
  aTag.setAttribute("href", `https://${link}`);
  aTag.setAttribute("target", "_blank");
  div.setAttribute("draggable", true);
  div.appendChild(aTag);
  canvas.appendChild(div);
  div.style.position = "fixed";
  div.style.left = `${x}`;
  div.style.top = `${y}`;
  console.log("hey");
  dragging_CreatedLink();
}
