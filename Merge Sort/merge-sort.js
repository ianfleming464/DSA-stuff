const arr = [5, 2, 4, 7, 1, 3, 2, 6];

// First here is the merge helper function, which sorts the various split arrays
const merge = (left = [], right = []) => {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      const l = left.shift();
      sortedArray.push(l);
    } else {
      const r = right.shift();
      sortedArray.push(r);
    }
  }

  console.log({ sortedArray });
  return [...sortedArray, ...left, ...right];
};

// Next is the mergeSort function, which splits the array into smaller arrays

const mergeSort = (array = []) => {
  if (array.length === 1) {
    return array;
  } else {
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
};

function test() {
  let originalArray = [3, 1, 4, 2, 65, 888, 22, 15, 72, 7, 552];
  let sortedArray = mergeSort(originalArray);

  console.log('Original Array:', originalArray);
  console.log('\nSorted Array:', sortedArray);
}

test();
