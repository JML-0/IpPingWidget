class IpPingWidget extends Widget {
	
	constructor(id, app) {
		super(id, IpPingModel, IpPingView, IpPingController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = true;
	}
	
	async ready() {
		super.ready();
	}
	
}

class IpPingModel extends WidgetModel {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
	}

}

class IpPingView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		/*this.link = HH.create("a");
		SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(this.link);*/

		//label
		this.try.pingContainer = HH.create("div");
		SS.style(this.try.pingContainer, {"paddingTop": "10px", "width": "100%", "height": "40%", "lineHeight": "calc(100%)", "textAlign": "center", "fontSize": "35px"});
		this.try.stage.appendChild(this.try.pingContainer);

		//input
		this.try.ipContainer = HH.create("input");
		this.try.ipContainer.setAttribute("type", "text");
		this.try.ipContainer.setAttribute("value", "127.0.0.1");
		SS.style(this.try.ipContainer, {"width": "100%", "height": "17%", "textAlign": "center", "fontSize": "14px"});
		this.try.ipContainer.innerHTML = 0;
		this.try.stage.appendChild(this.try.ipContainer);

		//button
		this.try.footer.innerHTML = "DÉMARRER";
		SS.style(this.try.footer, {"fontSize": "16px", "userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.footer, "click", event => this.try.mvc.controller.GetPing(this.try.ipContainer.value));
		this.try.stage.appendChild(this.try.footer);
	}
	
	/*update(title, link) {
		this.link.innerHTML = title;
		HH.attr(this.link, {"href": "https://www.lemonde.fr" + link, "target": "_blank"});
	}*/
	
}

class IpPingController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	async GetPing(ip) {
		this.mvc.view.pingContainer.innerHTML = "34 ms";

		/*var exec = require('child_process').exec;
		var ping = exec('ping 127.0.0.1');
		//var ping = exec('cmd /C ping 127.0.0.1');
		ping.stdout.on('data', function (data) {
		console.log('' + data);
		});*/

		let result = await this.try.mvc.main.send("child_process", {"ping" : ip});
		console.log(result);

	}
	
	/*async load() {
		let result = await this.mvc.main.dom("https://lemonde.fr"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article = new xph().doc(dom).ctx(dom).craft('//*[@id="en-continu"]/div/ul/li[1]/a').firstResult; // find interesting things
		this.mvc.view.update(article.textContent, article.getAttribute("href"));
	}*/
	
}