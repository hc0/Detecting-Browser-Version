let arr1 = [
  {a:1,b:[1,2,3,4]},
  {b:1,c:[1,2,3,4]},
  [
    {d:100},
    {e:200},
    [
      1,2,3,4,["aa","bb","cc"]
    ]
  ]
]

function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
console.log(flatten(arr1)) 
// [
//   { a: 1, b: [1, 2, 3, 4] },
//   { b: 1, c: [1, 2, 3, 4] },
//   { d: 100 },
//   { e: 200 },
//   1,
//   2,
//   3,
//   4,
//   'aa',
//   'bb',
//   'cc'
// ]
