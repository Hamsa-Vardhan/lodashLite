function flattenDepth(arr, d = 1) {
	return d > 0
		? arr.reduce((res, item) => res.concat(Array.isArray(item) ? flattenDepth(item, d - 1) : item), [])
		: arr.slice();
}

function createAlpha(a, b) {
	let out = [];
	try {
		for (let i = a.charCodeAt(0); i <= b.charCodeAt(0); i++) out.push(String.fromCharCode(i));
		return out;
	} catch (error) {
		throw error;
	}
}

function range(a, b) {
	let out = [];
	if (a < b) for (let i = a; i < b; i++) out.push(i);
	else for (let i = a; i > b; i--) out.push(i);
	return out;
}

function orderBy(obj, firstlst, secondlst) {
	const out = obj.slice(0);
	for (let i = firstlst.length - 1; i >= 0; i--)
		if (typeof out[0][firstlst[i]] == 'number')
			if (secondlst[i] == 'asc') out.sort((a, b) => a[firstlst[i]] - b[firstlst[i]]);
			else out.sort((a, b) => b[firstlst[i]] - a[firstlst[i]]);
		else if (typeof out[0][firstlst[i]] == 'string')
			if (secondlst[i] == 'asc')
				out.sort((a, b) => {
					const item1 = a[firstlst[i]].toLowerCase();
					const item2 = b[firstlst[i]].toLowerCase();
					return item1 < item2 ? -1 : item1 > item2 ? 1 : 0;
					return 0;
				});
			else
				out.sort((a, b) => {
					console.log(firstlst[i]);
					const item1 = a[firstlst[i]].toLowerCase();
					const item2 = b[firstlst[i]].toLowerCase();
					return item1 > item2 ? -1 : item1 < item2 ? 1 : 0;
					return 0;
				});
		else throw { err: 'object inside object, try calling function inside' };
	return out;
}

function countsInList(lst) {
	let counts = {};
	for (let i of [ ...new Set(lst) ]) {
		counts[i.toString()] = lst.filter((v) => v === i).length;
	}
	return counts;
}

function flow(fun, ...functions) {
	let out = functions[0](...fun);
	functions.splice(0);
	for (let i of functions) out = i(fun);
	return out;
}

function isVow(char) {
	return [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ].indexOf(char) === -1 ? false : true;
}

function factors(num) {
	const out = [];
	for (let i of range(1, num + 1)) if (num % i == 0) out.push(i);
	return out;
}

function isPrime(num) {
	return factors(num).length == 2 ? true : false;
}

function timeTaken(fun, ...args) {
	const start = Date.now();
	const res = fun(...args);
	const end = Date.now();
	return res ? { time: end - start + 'ms', result: res } : { time: end - start + 'ms' };
}

module.exports = {
	flattenDepth,
	createAlpha,
	isVow,
	orderBy,
	timeTaken,
	range,
	countsInList,
	flow,
	factors,
	isPrime
};
