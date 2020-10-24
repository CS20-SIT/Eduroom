export const timeFormatter = (time) => {
  return time < 10 ? '0' + time + ':00' : time + ':00';
};
