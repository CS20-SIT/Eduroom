import { gridSections } from '../data/grid-area';

export const timeManagement = (timeSections, i) => {
  // Store time selected in each day
  let timeTmp = [...timeSections];
  // Add or Remove time selected
  if (timeTmp[parseInt(i % 5)].includes(parseInt(i / 5))) {
    timeTmp[parseInt(i % 5)].splice(
      timeTmp[parseInt(i % 5)].indexOf(parseInt(i / 5)),
      1
    );
  } else {
    timeTmp[parseInt(i % 5)].push(parseInt(i / 5));
  }
  // Sort time slots
  timeTmp[parseInt(i % 5)].sort();

  const tmp = createTable(timeTmp);
  return { tmp, timeTmp };
};

export const defineGridTime = () => {
  const gridAreas = [[], [], [], [], []];
  for (let i = 0; i < 40; i++) {
    gridAreas[parseInt(i / 8)].push('q' + i);
  }
  return gridAreas;
};

export const createTable = (timeTmp) => {
  // Create table to store time sections
  let table = [
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ];
  // Seperate consecutive times to each slot
  for (let x = 0; x < 5; x++) {
    let c = 0;
    if (timeTmp[x][0] || timeTmp[x][0] == 0) table[x][c].push(timeTmp[x][0]);
    for (let y = 0; y < timeTmp[x].length - 1; y++) {
      if (timeTmp[x][y] + 1 != timeTmp[x][y + 1]) {
        c++;
      }
      table[x][c].push(timeTmp[x][y + 1]);
    }
  }
  let tmp = [...defineGridTime()];
  // Assign name of each grid area
  for (let z = 0; z < 5; z++) {
    table[z].forEach((x, i) => {
      x.forEach((y) => {
        tmp[z][y] = gridSections[z] + i;
      });
    });
  }
  return tmp;
};
