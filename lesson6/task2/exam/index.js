function getFriendlyNumbers(start, end) {
	var arrayFriendlyNumbers = [];

	if (!isNaN(start) && !isNaN(end) && start >= 0 && 
		end >= 0 && ((start ^ 0) === start) &&
		((end ^ 0) === end)){
		for (var i = start; i <= end; i++) {
			var sumI = sumDivisor(i);
			if (sumI <= end && sumI > i){
				var sumJ = sumDivisor(sumI);
				if (sumJ == i)
				{
					arrayFriendlyNumbers.push([i, sumI]);
				}
			}
		}
		return arrayFriendlyNumbers;
	}
	return false;

	
}

function sumDivisor(n){
	var sum = 1;
	for (var i = 2; i <= n/2; i++) {
		if (n%i == 0){
			sum += i;
		}
	}
	return sum;
}

module.exports = {
	firstName: 'Oksana',
	secondName: 'Belysheva',
	task: getFriendlyNumbers
}

"jest": {
	"testURL": "http://localhost/"
}