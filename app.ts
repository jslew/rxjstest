import * as Rx from "rxjs/Rx"

class App {			
	start() {	
		var empty = Rx.Observable.fromArray(["hello"]);		
		var onetwothree = Rx.Observable.fromArray(["one","two","three"]);
		var stream = onetwothree.startWith("first")		
			.subscribe(v => {
			console.log(v);
		});
	}
}

new App().start();