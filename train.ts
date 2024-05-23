/*ZP-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
*/

function majorityElement(arr: number[]): number | null {
	const elementCount: { [key: number]: number } = {};
	let maxCount = 0;
	let majorityElement: number | null = null;

	for (const num of arr) {
		elementCount[num] = (elementCount[num] || 0) + 1;

		if (elementCount[num] > maxCount) {
			maxCount = elementCount[num];
			majorityElement = num;
		}
	}

	return majorityElement;
}

const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 3, 3, 3]);
console.log(result);
