type figure =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

// ===========================

function calc(arg: figure) {
  // type гарантирует сужение
  if (arg.type === "circle") {
    return arg.radius / (2 * Math.PI);
  }
  if (arg.type === "square") {
    return arg.side * arg.side;
  }
}

calc({ type: "square", side: 10 });
