/*
let oldObj = {age: 0};
let stateList = [
    // {age: oldObj.age + 1},
    // {age: oldObj.age + 1},
    // {age: oldObj.age + 1},
    // {age: 0 + 1},
    // {age: 0 + 1},
    // {age: 0 + 1},
    {age: 1},
    {age: 1},
    {age: 1}
];
stateList.forEach((newObj)=>{
    // Object.assign({}, {age: 0}, {age: 1}); // {age: 1}
    // Object.assign({}, {age: 1}, {age: 1}); // {age: 1}
    // Object.assign({}, {age: 1}, {age: 1}); // {age: 1}
    oldObj = Object.assign({}, oldObj, newObj);
});
console.log(oldObj);
 */
let oldObj = {age: 0};
let stateList = [
    (preState)=>{return {age: preState.age + 1}},
    (preState)=>{return {age: preState.age + 1}},
    (preState)=>{return {age: preState.age + 1}},
];
stateList.forEach((fn)=>{
    // {age: 1}
    // {agg: 2}
    // {agg: 3}
    let newObj =  fn(oldObj);
    // {age: 0} {age: 1} / {age: 1}
    // {age: 1} {age: 2} / {age: 2}
    // {age: 2} {age: 3} / {age: 3}
    oldObj = Object.assign({}, oldObj, newObj);
});
console.log(oldObj);

