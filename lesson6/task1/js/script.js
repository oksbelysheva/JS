var open = document.getElementById("open-btn"),
name_value = document.getElementsByClassName("name-value")[0],
budget_value = document.getElementsByClassName("budget-value")[0],
goods_value = document.getElementsByClassName("goods-value")[0],
items_value = document.getElementsByClassName("items-value")[0],
employers_value = document.getElementsByClassName("employers-value")[0],
discount_value = document.getElementsByClassName("discount-value")[0],
isopen_value = document.getElementsByClassName("isopen-value")[0],
goods_item = document.getElementsByClassName("goods-item"),
goods_button = document.getElementsByTagName("button")[1],
budget_button = document.getElementsByTagName("button")[2],
employers_button = document.getElementsByTagName("button")[3],
choose_item = document.querySelector(".choose-item"),
time_value = document.querySelector(".time-value"),
count_budget_value = document.querySelector(".count-budget-value"),
allEmployers = document.querySelectorAll(".hire-employers-item");


var money, price;

open.addEventListener("click",() => {
	money = prompt("Ваш бюджет?","");

	while(isNaN(money) || money=="" || money == null){
		money = prompt("Ваш бюджет?","");
	}
	budget_value.textContent = money;

	name_value.textContent = prompt("Название вашего магазина?","").toUpperCase();
});

goods_button.addEventListener("click",() =>{
	for (var i = 0; i < goods_item.length; i++) {
		var a = goods_item[i].value;

		if ((typeof(a))==="string" && (typeof(a)) != null && a.length < 50){
			console.log("Всё верно");
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		}else{
			i = i - 1;
		}
	}
});

choose_item.addEventListener("change",() => {
	var items = choose_item.value;
	if (isNaN(items) && items != ""){
	mainList.shopItems = items.split(", ");
	mainList.shopItems.sort();

	items_value.textContent = mainList.shopItems;
}
});

time_value.addEventListener("change",() => {
	var time = time_value.value;
	if (time < 0){
		console.log("Такого не может быть");
		mainList.open = false;
	}
	else if (time > 8 && time < 20){
		console.log("Время работать!");
		mainList.open = true;
	} else if (time < 24){
		console.log("Уже слишком поздно");
		mainList.open = false;
	}
	else{
		console.log("В сутках только 24 часа");
		mainList.open = false;
	};

	if (mainList.open == true){
		isopen_value.style.backgroundColor = "green";
	}
	else{
		isopen_value.style.backgroundColor = "red";
	}
});

discount_value.addEventListener("click", () =>{
	if (mainList.discount == true){
		mainList.discount = false;
		discount_value.style.backgroundColor = "red";
	}
	else{
		mainList.discount = true;
		discount_value.style.backgroundColor = "green";
	}
})

budget_button.addEventListener("click", () => {
	count_budget_value.value = money/30;
});

employers_button.addEventListener("click",() => {
	for (var i = 0; i < allEmployers.length; i++){
		var name = allEmployers[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i]+",";
	}
})

const mainList = {
	budget: money,
	shopName:name,
	shopGoods:[],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	makeDiscount: function makeDiscount(){
		if (mainList.discount == true){
			price = (price/100)*80;
		}
	},
}

