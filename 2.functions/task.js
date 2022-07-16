// Задание 1
function getArrayParams(arr) { //99, 50, -3
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];

  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity
  for (let i = 0; i < arrOfArr.length; i++) {
    let res = func(arrOfArr[i]);
    if (res > max) {
      max = res;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, difference
  min = Infinity;
  max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min
  return Math.abs(difference);
}