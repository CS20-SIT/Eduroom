export const timeFormatter = (time) => {
  return time < 10 ? '0' + time + ':00' : time + ':00';
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
