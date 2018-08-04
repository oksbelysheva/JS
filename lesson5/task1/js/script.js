var menuItem = document.getElementsByClassName('menu-item'),
	menuTemp = menuItem[1],
	menu = document.getElementsByClassName("menu")[0];
menu.removeChild(menuItem[1]);
menu.insertBefore(menuTemp, menuItem[2]);

var li = document.createElement('li');
li.classList.add("menu-item");
li.textContent = "Пятый пункт"
menu.appendChild(li);

var docBody = document.getElementsByTagName("body")[0];
docBody.style.cssText = "height: 670px;\
    background: url(D:/Skill/JS/lesson5/img/apple_true.jpg) center no-repeat;\
    -webkit-background-size: cover;\
    background-size: cover;\
    padding-top: 180px;\
    font-family: 'Cuprum'";

var title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple";

var adv = document.getElementsByClassName("adv")[0];
document.getElementsByClassName("column")[1].removeChild(adv);

var promptApple = document.getElementById("prompt");
promptApple.textContent = prompt("Каое у вас отношение к технике Apple","");