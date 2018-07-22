var countArr = +prompt("Сколько массивов?","");
var arr = [];

for (var i = 0; i < countArr; i++) {
	var tempArr = [];
	for (var j = 0; j < 3; j++) {
		tempArr.push(Math.round(Math.random()*100));
	}
	arr.push(tempArr);
}

var sum = 0;

arr.forEach(function (item){
	item.forEach(function (item){
		sum += item;
	})
});

console.log(sum);
console.log(arr);
