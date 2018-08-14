window.addEventListener('DOMContentLoaded', function() {
	var tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info = document.getElementsByClassName('info-header')[0];
	
	function hideTabContent(a){
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		var target = event.target;
		if (target.className == 'info-header-tab'){
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]){
					showTabContent(i);
					break;
				}			
			}
		};
	});

	//Timer
	var deadline = '2018-08-06';

	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime){
		var timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock(){
			var t = getTimeRemaining(endtime);
			if (t.seconds >= 0  && t.minutes >= 0 &&
				t.hours >= 0){
				hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
		}
		else
		{
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}
		

		if (t.total <= 0){
			clearInterval(timeInterval);
		}
	}

	updateClock();
	var timeInterval = setInterval(updateClock, 1000);
};

setClock('timer', deadline);

	var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
        	if (start === null) start = time;
        	var progress = time - start,
        	r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        	window.scrollTo(0,r);
        	if (r != w + t) {
        		requestAnimationFrame(step)
        	} else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);}

    //Modal

    var more = document.querySelector('.more'),
    	overlay = document.querySelector('.overlay'),
    	close = document.querySelector('.popup-close');
    more.addEventListener('click', function() {
    	this.classList.add('more-splash');
    	overlay.style.display="block";
    	document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
    	overlay.style.display="none";
    	more.classList.remove('more-splash');
    	document.body.style.overflow = '';
    });
});