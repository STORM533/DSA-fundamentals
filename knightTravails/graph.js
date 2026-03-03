const MOVES = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2],
];

const inBounds = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;
const key = ([x, y]) => `${x},${y}`;

// ── Node ──────────────────────────────────────────────────
class Node {
  constructor(square) {
    this.square = square;   // [x, y]
    this.neighbors = [];    // Node[]
  }
}

// ── Graph ─────────────────────────────────────────────────
class KnightGraph {
  constructor() {
    this.nodes = new Map(); // key → Node
    this._build();
  }

  _build() {
    // 1. Create a node for every square
    for (let x = 0; x <= 7; x++)
      for (let y = 0; y <= 7; y++)
        this.nodes.set(key([x, y]), new Node([x, y]));

    // 2. Wire up edges (knight moves)
    for (const node of this.nodes.values()) {
      for (const [dx, dy] of MOVES) {
        const dest = [node.square[0] + dx, node.square[1] + dy];
        if (inBounds(dest))
          node.neighbors.push(this.nodes.get(key(dest)));
      }
    }
  }

  get(square) {
    return this.nodes.get(key(square));
  }
}

// ── BFS shortest path ─────────────────────────────────────
function knightMoves(start, end) {
  const graph = new KnightGraph();

  const startNode = graph.get(start);
  const endKey    = key(end);

  const queue   = [[startNode, [startNode.square]]];
  const visited = new Set([key(start)]);

  while (queue.length) {
    const [node, path] = queue.shift();

    if (key(node.square) === endKey) {
      const moves = path.length - 1;
      console.log(`=> You made it in ${moves} move${moves === 1 ? "" : "s"}!  Here's your path:`);
      path.forEach(sq => console.log(`   [${sq}]`));
      return path;
    }

    for (const neighbor of node.neighbors) {
      const nk = key(neighbor.square);
      if (!visited.has(nk)) {
        visited.add(nk);
        queue.push([neighbor, [...path, neighbor.square]]);
      }
    }
  }
}
export {knightMoves};
