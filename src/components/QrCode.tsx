function buildQr(size = 21) {
  const on = Array.from({ length: size }, () => Array<boolean>(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array<boolean>(size).fill(false));

  const markFinder = (row: number, col: number) => {
    for (let y = -1; y <= 7; y += 1) {
      for (let x = -1; x <= 7; x += 1) {
        const yy = row + y;
        const xx = col + x;
        if (yy < 0 || xx < 0 || yy >= size || xx >= size) continue;
        reserved[yy][xx] = true;
        const inside = x >= 0 && y >= 0 && x <= 6 && y <= 6;
        const edge = x === 0 || y === 0 || x === 6 || y === 6;
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        on[yy][xx] = inside && (edge || core);
      }
    }
  };

  markFinder(0, 0);
  markFinder(0, size - 7);
  markFinder(size - 7, 0);

  for (let i = 0; i < size; i += 1) {
    if (!reserved[6][i]) {
      reserved[6][i] = true;
      on[6][i] = i % 2 === 0;
    }
    if (!reserved[i][6]) {
      reserved[i][6] = true;
      on[i][6] = i % 2 === 0;
    }
  }

  let seed = 184;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (reserved[y][x]) continue;
      seed = (seed * 13 + x * 3 + y * 7) % 97;
      on[y][x] = seed > 46;
    }
  }

  return on;
}

const modules = buildQr();

export function QrCode({ className }: { className?: string }) {
  const size = modules.length;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label="QR code"
    >
      <rect width={size} height={size} fill="#F5F7F5" />
      {modules.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#0D0F0E" />
          ) : null,
        ),
      )}
    </svg>
  );
}
