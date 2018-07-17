var mainList = {
		money: -1,
		name: '',
		shopGoods: [],
		employers: {},
		open: false
	};
var shopGoods = [];

function createShop(){
	var money = document.loandata.money.value;
	var name = document.loandata.name.value;

	mainList = {
		money: money,
		name: name,
		shopGoods: shopGoods,
		employers: {},
		open: false
	};
	showInfo();
}

function addType(){
	shopGoods.push(document.loandata.type.value);
	showInfo();

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
	if (mainList.shopGoods.length !== '0')
	{
		shopInfo += "Type of goods: " + mainList.shopGoods + "<br \/>";
	}

	if (mainList.money != -1)
	{
		var monthly = mainList.money/30;
		moneyOnDay.innerHTML = monthly.toFixed(2);}

	shop.innerHTML = shopInfo;
}
