const alphaList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(list1, list2) {
  const combinedList = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < list1.length && pointer2 < list2.length) {
    combinedList.push(list1[pointer1]);
    combinedList.push(list2[pointer2]);
    pointer1++;
    pointer2++;
  }

  return combinedList;
}

console.log('zipList', zipList(alphaList, numList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

// Assuming ziplist.js is ran under index.html, which defines underscore.js
console.log('zipListTheSimpleWay', zipListTheSimpleWay(alphaList, numList));
