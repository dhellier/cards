

function init() {
	var cards = loaddata();
	// cards = cards.sort();
	render(cards);
}

function loaddata() {

	var carddata = $.getJSON("file:///Users/interview/GitHub/cards/src/cards.json")
    
    console.log( carddata.responseJSON );
	var cards = carddata.responseJSON.get("cards");
	console.log(cards.getName());
	for (var i = cards.length - 1; i >= 0; i--) {
       console.log(cards[i].getName());
	}		
	return cards;
	
}

function render(cards) {

	for (var i = cards.length - 1; i >= 0; i--) {

		var cardEntry = document.createElement('li');
		cardEntry.id = "card-item-"+i;
		var cardData = document.createElement('div');
		cardData.class = "card-data";
		cardData.appendChild(document.createTextNode(cards[i].getName()));
		cardEntry.appendChild(cardData);
	    document.getElementById('card-list').appendChild(cardEntry);
	
	};

}

function compareWeight(a, b) {
	  // if (a is less than b by some ordering criterion)
	  //    return -1;
	  // if (a is greater than b by the ordering criterion)
	  //    return 1;
	  // // a must be equal to b
	  // return 0;

	  return 0;
}
