var num = 33721;
var multy = 1;
while(num !== 0) {
	var digit = num%10;
	multy *= digit;
	num = parseInt(num/10);
}
console.log(multy);
document.write(Math.pow(multy, 3));