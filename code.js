async function findMatches(arr, key) {
  return new Promise(function (resolve) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        count++;
      }
    }
    resolve(count);
  });
}
