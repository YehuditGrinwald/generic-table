function generateData() {
  const data = [];
  const NUMBER_OF_ROWS = 20;
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    const row = {
      id: `${i}`,
      task: `abc${i}`,
      priority: 1 + i,
      is_completed: true,
      type: "learn",
      deadline: "16/10/2023",
    };

    data.push(row);
  }
  return data;
}

export const nodes = generateData();
