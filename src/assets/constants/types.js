export let operators = [
  {
    sign: '+',
    method: function (a, b) {
      return a + b;
    },
  },
  {
    sign: '-',
    method: function (a, b) {
      return a - b;
    },
  },
  {
    sign: '*',
    method: function (a, b) {
      return a * b;
    },
  },
  {
    sign: '/',
    method: function (a, b) {
      return a / b;
    },
  },
];

export const url = 'https://google.com';
