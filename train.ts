/*ZM-TASK:

Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
MASALAN: reverseInteger(123456789) return 987654321

*/

function reverseInteger(num: number): number {
	const numStr: string = num.toString();

	const reversedStr: string = numStr.split('').reverse().join('');
	const reversedNum: number = parseInt(reversedStr);
	return reversedNum;
}
console.log(reverseInteger(123456789));
