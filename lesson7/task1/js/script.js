var btn = document.querySelector(".btn");
btn.addEventListener('click',myAnimation);

function myAnimation(){
	var elem = document.querySelector(".box"),
		pos = 0,
		id = setInterval(frame, 10);

	function frame(){
		if (pos == 300){
			clearInterval(id);
		}
		else{
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

var btns = document.getElementsByTagName('button'),
	btn_block = document.querySelector('.btn-block');

btn_block.addEventListener('click', function(event){
	if (event.target && event.target.tagName == "BUTTON"){
		console.log('Hello!');
	}
});