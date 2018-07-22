function Shop(){
	this.mainList = {
		money: -1,
		name: "",
		typeGoods: [],
		employers: [],
		open: false,
		discount: false,
		price: 100,
		goods:[],
	};

	this.calcDiscount = function (prc){
		if (this.mainList.discount)
		{
			this.price = this.price * prc;
		}
	}

	this.newName = function(){
		this.mainList.name = document.loandata.name.value;
		this.showInfo();
	}

	this.newBudget = function(){
		this.mainList.money = document.loandata.budget.value;
		this.showInfo();
	}

	this.showInfo = function (){
		var shopInfo = '';
		if (this.mainList.name !== "")
		{
			shopInfo += "Shop name: " + this.mainList.name + "<br \/>";
		}
		if (this.mainList.money != -1)
		{
			shopInfo += "Budget: " + this.mainList.money + "<br \/>";
			var budgetOnDay = calcMoneyOnDay(this.mainList.money);
			moneyOnDay.innerHTML = budgetOnDay.toFixed(2);
		}
		if (this.mainList.typeGoods.length != '0')
		{
			shopInfo += "Наш магазин включает: " + this.mainList.typeGoods + "<br \/>";
			for (var item in this.mainList.typeGoods) {
				Things[i]
			}
		}
		if (this.mainList.goods.length != '0')
		{
			shopInfo += "У нас вы можете купить: " + "<br \/>";
			this.mainList.goods.forEach(function(item){
				shopInfo += item + "<br \/>";
			});
		}
		if (this.mainList.employers.length != '0')
		{
			shopInfo += "Employers: " +"<br \/>";
			for (var i = 0; i < this.mainList.employers.length; i++) {
				shopInfo += this.mainList.employers[i].name + " " + this.mainList.employers[i].number + "<br \/>";
			}
		}

		shop.innerHTML = shopInfo;
	}

	this.addType = function (){
		var type = document.loandata.type.value;
		console.log(type);
		if (type != "")
		{
			this.mainList.typeGoods.push(type);
			this.showInfo();
		}
	}

	this.addGood = function (){
		var good = document.loandata.good.value;
		console.log(good);
		if (good != "")
		{
			this.mainList.goods.push(good);
			this.showInfo();
		}
	}

	this.addEmployer = function (){
		this.mainList.employers.push({name:document.loandata.employerName.value, number:document.loandata.employerNumb.value});
		this.showInfo();
	}

	function calcMoneyOnDay(money){
		if (money != -1)
		{
			return money/30;
		}
	}

}

var myShop = new Shop();

