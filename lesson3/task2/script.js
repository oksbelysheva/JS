var str = "урок-3-был-слишком-легким";
while(str.indexOf("-") != -1)
{
	str = str.replace("-"," ");
}
str = str[0].toUpperCase() + str.slice(1);
str = str.replace("легким","");
str = str.substring(0,str.length-2) + "оо";
console.log(str);

var arr = [20, 33, 1,"Человек", 2, 3];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i]))
	sum += arr[i]*arr[i]*arr[i];
}
console.log(Math.sqrt(sum));
