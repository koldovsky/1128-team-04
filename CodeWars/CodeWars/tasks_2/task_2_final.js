// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll(/T/g, "U");
}

// https://codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
