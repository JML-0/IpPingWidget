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

	/**
	* Retourne le ping obtenu selon l'ip
	* @param ip : ip à tester
	*/
	async GetPingModel(ip)
	{
		let result = await this.mvc.main.dom("https://node.nicopr.fr/dash/ping/ping/" + ip); // load web page
		let domstr = _atob(result.response.dom); // decode result

		var ping = /\d+(?:.\d+)?\s?ms/.exec(domstr);
		
		if (ping)
		{
			return ping[0];
		}else{return "erreur";}
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
		Events.on(this.try.footer, "click", event => this.try.mvc.controller.GetPingController(this.try.ipContainer.value));
		this.try.stage.appendChild(this.try.footer);
	}
	
	/**
	* Affiche le ping sur @pingContainer
	* @param ping : ping obtenu
	*/
	update(ping){this.pingContainer.innerHTML = ping;}

	loading(){this.pingContainer.innerHTML = "...";}
	
}

class IpPingController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	GetPingEnabled = true;

	/**
	* Récupère le ping obtenu depuis @GetPingModel puis appel la méthode @update
	* @param ip : ip à tester
	*/
	async GetPingController(ip) {

		if (GetPingEnabled)
		{
			GetPingEnabled = false;

			this.mvc.view.loading();

			let result = await this.mvc.model.GetPingModel(ip);

			this.mvc.view.update(result);

			GetPingEnabled = true;
		}
	}
	
}