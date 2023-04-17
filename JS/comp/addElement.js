let canvas = document.querySelector("#canvas");

export function addElement(x, y) {
  // create a new div element
  const newDiv = document.createElement("div");
  const textarea = document.createElement("textarea", "hi yet");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(textarea);

  // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);
  canvas.appendChild(newDiv);
  newDiv.setAttribute("draggable", true);
  newDiv.classList.add("Draggable");
  newDiv.style.position = "fixed";
  newDiv.style.left = `${x}px`;
  newDiv.style.top = `${y}px`;
}

export function Note(x, y) {
  const Div = document.createElement("div");
  const textarea = document.createElement("textarea");
  Div.appendChild(textarea);
  Div.classList.add("NOTE");
  Div.setAttribute("draggable", true);
  canvas.appendChild(Div);
  Div.style.position = "fixed";
  Div.style.left = `${x}px`;
  Div.style.top = `${y}px`;
}
