const fac = (n) => {
  return n == 0 ? 1 : n * factorial(n - 1);
};

const permutation = (n, r) => fac(n) / fac(n - r);

module.exports = {
  permutation,
  combination,
};
