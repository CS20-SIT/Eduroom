const contestRules = [
  {
    value: "oi",
    label: "OI",
  },
  {
    value: "acm",
    label: "ACM",
  },
];
const contestStatuses = [
  {
    value: true,
    label: "ON",
  },
  {
    value: false,
    label: "OFF",
  },
];
const timelims = [
  {
    value: 250,
    label: "250",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 750,
    label: "750",
  },
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 5000,
    label: "5000",
  },
];
const memlims = [
  {
    value: 256,
    label: "256",
  },
  {
    value: 512,
    label: "512",
  },
  {
    value: 1024,
    label: "1024",
  },
  {
    value: 2048,
    label: "2048",
  },
  {
    value: 4096,
    label: "4096",
  },
];
const diffs = [
  {
    value: "Easy",
    label: "Easy",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Hard",
    label: "Hard",
  },
  {
    value: "Very hard",
    label: "Very Hard",
  },
  {
    value: "Impossible",
    label: "Impossible",
  },
];
module.exports = {
  contestRules,
  contestStatuses,
  diffs,
  timelims,
  memlims,
};
