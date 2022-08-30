let oldObj = { age: 0 };
let stateList = [
	// {age: oldObj.age + 1},
	// {age: oldObj.age + 1},
	// {age: oldObj.age + 1},
	// {age: 0 + 1},
	// {age: 0 + 1},
	// {age: 0 + 1},
	{ age: 1 },
	{ age: 1 },
	{ age: 1 }
];
stateList.forEach((newObj) => {
	// Object.assign({}, {age: 0}, {age: 1}); // {age: 1}
	// Object.assign({}, {age: 1}, {age: 1}); // {age: 1}
	// Object.assign({}, {age: 1}, {age: 1}); // {age: 1}
	oldObj = Object.assign({}, oldObj, newObj);
});
console.log(oldObj);

