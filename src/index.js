module.exports = function toReadable (number) {

	let readableString = '';
	let arrayNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let arrayNamesTen = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if (number == 0) {return 'zero';}

	let firstNumber = parseInt(number / 100);
	if (firstNumber > 0){
		readableString = arrayNames[firstNumber] + ' hundred';
		
	}

	let secondNumber = number % 100;
	if (secondNumber > 19){
		let tensTen = parseInt(secondNumber / 10);
		readableString = readableString + ' ' + arrayNamesTen[tensTen];

	} else if (secondNumber >= 10){
		readableString = readableString + ' ' + arrayNames[secondNumber];
    	return readableString.trim();
	}

	let thirdNumber = number % 10;
	readableString = readableString + ' ' + arrayNames[thirdNumber];
	
	return readableString.trim();
  }
