let operators = [
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

export default operators;
