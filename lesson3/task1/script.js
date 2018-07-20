var mainList = {
		money: -1,
		name: '',
		shopGoods: [],
		employers: [],
		open: false,
		discount: false,
	};
var shopGoods = [];
var employers = [];
var price = 100;

function createShop(){
	var money = document.loandata.money.value;
	var name = document.loandata.name.value;

	mainList = {
		money: money,
		name: name,
		shopGoods: shopGoods,
		employers: employers,
		open: false,
		discount: false,
	};

	calcDiscount(0.8);
	showInfo();
}

function addType(){
	shopGoods.push(document.loandata.type.value);
	showInfo();

}

function addEmployer(){
	employers.push({name:document.loandata.employerName.value, number:document.loandata.employerNumb.value});
	showInfo();
}

function calcDiscount(prc){
	if (mainList.discount)
	{
		price = price * prc;
	}
}

function showInfo(){
	var shopInfo = '';
	if (mainList.name !== "")
	{
		shopInfo += "Shop name: " + mainList.name + "<br \/>";
	}
	if (mainList.money != -1)
	{
		shopInfo += "Budget: " + mainList.money + "<br \/>";
	}
	if (mainList.shopGoods.length != '0')
	{
		shopInfo += "Type of goods: " + mainList.shopGoods + "<br \/>";
	}
	if (mainList.employers.length != '0')
	{
		shopInfo += "Employers: " +"<br \/>";
		for (var i = 0; i < mainList.employers.length; i++) {
			shopInfo += mainList.employers[i].name + " " + mainList.employers[i].number + "<br \/>";
		}
	}

	var budgetOnDay = calcMoneyOnDay(mainList.money);
	moneyOnDay.innerHTML = budgetOnDay.toFixed(2);
	shop.innerHTML = shopInfo;
}

function calcMoneyOnDay(money){
	if (money != -1)
	{
		return mainList.money/30;
	}
}
