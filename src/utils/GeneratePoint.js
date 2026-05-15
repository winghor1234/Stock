export const generatePoints = () => {
  let points = "";
  let y = 12;

  for (let x = 0; x <= 60; x += 10) {
    y += (Math.random() - 0.5) * 8; // ขึ้นลง
    y = Math.max(4, Math.min(20, y)); // limit
    points += `${x},${y} `;
  }

  return points;
};