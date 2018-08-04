var openBtn = document.getElementById("open-btn"),
leftMenuNameValue = document.getElementsByClassName("name-value")[0],
leftMenuBudgetValue = document.getElementsByClassName("budget-value")[0],
leftMenuGoodsValue = document.getElementsByClassName("goods-value")[0],
leftMenuItemsValue = document.getElementsByClassName("items-value")[0],
leftMenuEmployersValue = document.getElementsByClassName("employers-value")[0],
leftMenuDiscountValue = document.getElementsByClassName("discount-value")[0],
leftMenuIsopenValue = document.getElementsByClassName("isopen-value")[0],
goods-item = document.querySelector(".goods-item"),
button1 = document.getElementsByTagName("button")[1],
button2 = document.getElementsByTagName("button")[2],
button3 = document.getElementsByTagName("button")[3],
chooseGood = document.querySelector(".choose-item"),
timeValue = document.querySelector(".time-value"),
countBudgetValue = document.querySelector(".count-budget-value"),
allEmployers = document.querySelectorAll(".hire-employers-item");

let money,
price;

openBtn.addEventListener("click", () => {
	money = prompt("Ваш бюджет?","");

	while (isNaN(money) || money=="" || money==null){
		money = prompt("Ваш бюджет?","");
	}
	leftMenuBudgetValue.textContent = money;

	leftMenuNameValue.textContent = prompt("Название вашего магазина?","").toUpperCase();
});

button1.addEventListener('click', () => {
	for (var i = 0; i < goods-item.length; i++){
			var a = goods-item[i].value;
			if ((tepeof(a)) === "string" && (tepeof(a))!=null && a.length < 50){
				console.log("Всё верно");
				mainList.shopGoods[i] = a;
				leftMenuGoodsValue.textContent = mainList.shopGoods;
			}
			else{
				i = i-1;

			}
		}
	});

chooseGoods.addEventListener("change", () => {
	var items = chooseGoods.value;
	if (isNaN(items) || items != ""){
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		leftMenuItemsValue.textContent = mainList.shopItems;
	}
})


const mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	workTime: function workTime(time){
		if (time < 0){
			console.log("Такого не может быть!");
		}
		else if (time > 8 && time < 20){
			console.log("Время работать!");
			mainList.open = true;
		}
		else if (time < 24){
			console.log("Уже слишком поздно!");
		}else{
			console.log("В сутках только 24 часа!");
		}
	},
	dayBudget: function dayBudget(){
		alert("Ежедневный бюджет" + mainList.budget/30);
	},
	makeDiscount: function makeDiscount(){
		if (mainList.discount == true){
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers(){
		for (var i = 1; i < 4; i++){
			var name = prompt("Имя сотрудника","");
		}
	}
}

for (var key in mainList){
	console.log("Наш магазин включает в себя:" ${key});
}

console.log(mainList);