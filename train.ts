/* ZL-TASK:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
*/
function stringToKebab(inputString: string): any {
	const kebabstring = inputString.toLowerCase().replace(/\s+/g, '-');
	return kebabstring;
}
console.log(stringToKebab('I love Kebab'));
