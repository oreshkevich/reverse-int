module.exports = function reverse (n) {
  b = Math.abs(n);
    let str = String(b);

    let result = str.split('').reverse().join('');
    return Number(result);
}
