var budgetShopOnMonth, nameShop;
budgetShopOnMonth = prompt("How is your budget?", "0");
nameShop = prompt("What's the name of the store?", "name");
var mainList = {
	budgetShopOnMonth: undefined,
	nameShop: undefined,
	shopGoods: undefined,
	employers: undefined,
	open: undefined
};
mainList.shopGoods = [prompt("What type of goods will be sold?", "type"),
						 prompt("What type of goods will be sold?", "type"),
 						 prompt("What type of goods will be sold?", "type")];

document.write("Shop name: " + mainList.nameShop + "<br \/>"
				+ "Budget: " + mainList.budgetShopOnMonth + "<br \/>"
				+ "Type of goods: " + mainList.shopGoods + "<br \/>");
document.write("Budget on day: " + budgetShopOnMonth/30);