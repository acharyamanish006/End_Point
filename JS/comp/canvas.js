let canvas = document.querySelector("#canvas");
// let context = canvas.getContext("2d");
let gapSize = 25;

export function canvasWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("Canvas created");
  // canvasGrid(canvas.width, canvas.height, gapSize, gapSize);
}

export function canvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("canvas size resizing");
  console.log(canvas.width);
  console.log(canvas.height);
  // canvasGrid(canvas.width, canvas.height, gapSize, gapSize);
}

// function canvasGrid(width, height, xGap, yGap) {
//   for (let x = 1; x < width; x += xGap) {
//     context.moveTo(x, 0);
//     context.lineTo(x, height);
//   }
//   for (let y = 1; y < height; y += yGap) {
//     context.moveTo(0, y);
//     context.lineTo(width, y);
//   }

//   context.strokeStyle = "#dbdbdb";
//   context.stroke();
// }

// export function zoom(e) {
//   console.log(e);
//   let zoom = 1;
//   if (e.deltaY > 0) {
//     canvas.style.transform = `scale(${(zoom += 0.5)})`;
//   } else {
//     canvas.style.transform = `scale(${(zoom -= 0.5)})`;
//   }
// }
