module.exports = function toReadable (number) {
  const units = [
		'', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
		'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
		'eighteen', 'nineteen', 
	];

	const tens = [
		'', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
	];
  
	const hundreds = [
		'', 'one hundred', 'two hundred','three hundred', 'four hundred', 'five hundred',
		'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
	];

	let total = [units, tens, hundreds];
	let result = [];
  
  do {
    let index = String(number).length-1;
    let tempValue = Math.floor(number/10**index);
    if (number < 20 && index > 0) {
      result.push(total[--index][number]);
      break;
    } 
    result.push(total[index][tempValue]);
    number %= 10**index;
  } while (number != 0);
  
  return result.join(' ') || 'zero'
}
