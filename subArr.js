const arr = [1, 4, 20, 3, 10, 5];
const subArray = (arr, value) => {
  let sum = 0;
  let right = 0;
  let left = 0;
  let result = [0, 0];

  while (right < arr.length) {
    sum += arr[right];
    while (left < right && sum > value) {
      sum -= arr[left++];
    }

    console.log(result.length, result[1], result[0], right, left);
    if (
      sum === value &&
      (result.length === 1 || result[1] - result[0] < right - left)
    ) {
      result = [left + 1, right + 1];
    }
    right++;
  }

  console.log("largest sub array", result);
};

subArray(arr, 33);
