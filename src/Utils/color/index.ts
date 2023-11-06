/**
 * Generator to rotate colors in a defined list.
 */
function* colorsGenerator() {
  let index = 0;
  const colors = [
    "#f00", //
    "#ff0",
    "#0f0",
    "#0ff",
    "#00f",
    "#f0f",
  ];
  while (true) {
    yield colors[index++ % colors.length];
  }
}

export { colorsGenerator };
