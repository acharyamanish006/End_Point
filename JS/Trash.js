let Trash_bin = document.getElementById("Trash");

export function deleteElement(x, y, element) {
  Trash_bin.addEventListener("mouseover", (ef) => {
    if (x >= ef.x - 50 && x <= ef.x + Trash_bin.clientWidth + 1500) {
      if (y >= ef.y - 50 && y <= ef.y + Trash_bin.clientHeight + 1500) {
        Trash_bin.classList.add("deleteEffect");
        element.remove();
        setTimeout(() => {
          Trash_bin.classList.remove("deleteEffect");
        }, 400);
      }
    }
  });
}
