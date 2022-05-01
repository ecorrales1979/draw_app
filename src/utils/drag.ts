export const draw = (elementId: string) => {
  const dragElement = document.getElementById(elementId) as HTMLDivElement;

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const closeDrag = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const elementDrag = (ev: MouseEvent) => {
    ev = ev || window.event;
    ev.preventDefault();
    pos1 = pos3 - ev.clientX;
    pos2 = pos4 - ev.clientY;
    pos3 = ev.clientX;
    pos4 = ev.clientY;
    dragElement.style.top = dragElement.offsetTop - pos2 + "px";
    dragElement.style.left = dragElement.offsetLeft - pos1 + "px";
  };

  const dragMouseDown = (ev: MouseEvent) => {
    ev = ev || window.event;
    ev.preventDefault();
    pos3 = ev.clientX;
    pos4 = ev.clientY;
    document.onmouseup = closeDrag;
    document.onmousemove = elementDrag;
  };

  dragElement.onmousedown = dragMouseDown;
};
