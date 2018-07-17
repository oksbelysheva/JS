function showWeek(){
	var week = ["понедельник", "вторник", "среда","четверг","пятница","суббота","воскресенье"];

	var today = (new Date()).toLocaleString('ru', {weekday: 'long'});

	for (var i = 0; i <= 4; i++) {
		if (week[i] == today)
		{
			infoWeek.innerHTML += "<br \/><em>" + week[i]+"</em>";
		}
		else{
			infoWeek.innerHTML += "<br \/>" + week[i];
		}
	}
	for (var i = 5; i <= 6; i++) {
		if (week[i] == today)
		{
			infoWeek.innerHTML += "<br \/><b><em>" + week[i]+"</em>";
		}
		else{
			infoWeek.innerHTML += "<br \/><b>" + week[i];
		}
	}
}

function taskArray(){
	var arr = [];
	var result = '';
	for (var i = 0; i <= 7; i++) {
		arr[i] = Math.floor((Math.random() * (1000000 - 1000) + 1000));
	}
	for (var i = 0; i<= 7; i++) {
		if (arr[i].toString()[0]=="3" || arr[i].toString()[0]=="7")
			{
				result += "<br \/><b>" + arr[i];
			}
	}
	arrayThreeOrSeven.innerHTML = result;
}