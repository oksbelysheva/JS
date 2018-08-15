class Options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	makeDiv(text){
		let div = document.createElement('div');
		div.textContent = text;
		div.style.cssText = "height: "+this.height+"; width:"+this.width+"; background: "+this.bg+"; ";
		document.body.appendChild(div);
	}
}

var firstDiv = new Options(400,400,'blue',15,"center");
firstDiv.makeDiv("ТЕКСТ");