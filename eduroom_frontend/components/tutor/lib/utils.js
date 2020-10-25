export const timeFormatter = (time) => {
  let tmp = time;
  let ampm = ' AM';
  if (time > 12) {
    tmp = time - 12;
    ampm = ' PM';
  }
  if (time == 12) ampm = ' PM';
  return tmp >= 10 ? tmp + ':00' + ampm : '0' + tmp + ':00' + ampm;
};

export const monthConverter = (m) => {
  const ma = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return ma[m];
};
