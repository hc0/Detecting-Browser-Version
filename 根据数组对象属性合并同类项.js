var data = [
  { id: "1", name: "test1", rName: "a" },
  { id: "2", name: "test2", rName: "c" },
  { id: "3", name: "test2", rName: "d" },
  { id: "4", name: "test2", rName: "e" },
  { id: "5", name: "test1", rName: "b" },
  { id: "6", name: "test3", rName: "f" }
];
var result = data.reduce((acc,cur) => {
  const { id, name, rName } = cur;
  const temp = acc[name] || { id:[], name, rName: [] };
  acc[name] = temp;
  temp["rName"].push(rName);
  temp["id"].push(id);
  return acc;
}, {})
console.log(Object.values(result))
// [
//   { id: ['1', '5'], name: 'test1', rName: ['a', 'b'] },
//   { id: ['2', '3', '4'], name: 'test2', rName: ['c', 'd', 'e'] },
//   { id: ['6'], name: 'test3', rName: ['f'] }
// ]



