// TASK - ZJ

function reduceNestedArray(arr: any[]): number {
	return arr.reduce((num: number, curr: any) => {
		if (Array.isArray(curr)) {
			return num + reduceNestedArray(curr);
		} else if (typeof curr === 'number') {
			return num + curr;
		} else {
			return num;
		}
	}, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));
