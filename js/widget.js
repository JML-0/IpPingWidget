class IpPingWidget extends Widget {
	
	constructor(id, app) {
		super(id, IpPingModel, IpPingView, IpPingController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = true;
		this.sizeX = 2;
		this.sizeY = 1;
		this.radius = 15;
	}
	
	async ready() {
		super.ready();
		
		//this.controller.GetPing();
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

		let height = (this.try.mvc.main.header ? 25 : 0) + (this.try.mvc.main.footer ? 25 : 0);

		this.try.pingContainer = HH.create("div");
		SS.style(this.try.pingContainer, {"paddingTop": "10px", "width": "100%", "height": "40%", "lineHeight": "calc(100%)", "textAlign": "center", "fontSize": "55px"});
		this.try.pingContainer.innerHTML = 0;
		this.try.stage.appendChild(this.try.pingContainer);

		this.try.urlContainer = HH.create("input");
		this.try.urlContainer.setAttribute("type", "text");
		this.try.urlContainer.setAttribute("value", "1");
		SS.style(this.try.urlContainer, {"width": "100%", "height": "17%", "textAlign": "center", "fontSize": "14px"});
		this.try.urlContainer.innerHTML = 0;
		this.try.stage.appendChild(this.try.urlContainer);

		this.try.footer.innerHTML = "DÉMARRER";
		SS.style(this.try.footer, {"fontSize": "16px", "userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.footer, "click", event => this.try.mvc.controller.GetPing());
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

	async GetPing() {
		this.mvc.view.pingContainer.innerHTML = 10;
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