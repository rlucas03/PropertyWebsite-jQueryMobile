$(document).on("pagecontainerbeforeshow", function (e, ui){
	var page = ui.toPage[0].id;
	if( page == 'favourites' ) {
		if (typeof(Storage) != "undefined") {
			displayPropertyDetails(getPropertyDetails());
		} else {
			$("#nostorage").text("Local Storage not supported");  
		}
		
	}
});

function getPropertyDetails() {
	var propertyDetails = JSON.parse(localStorage.getItem('propertyToShow'));
	return propertyDetails;
}

function displayPropertyDetails(details) {
	var myfavslist = "";
	if(details !== null) {
		for (var k = 0; k < details.length; k++) {
			myfavslist += "<li><a href=property1.html?id=" + 
			details[k].propertyid + 
			" class = 'ui-btn ui-corner-all ui-btn-icon-right'>"
			 + details[k].propertytitle + "Your fav 1</a></li>";
			} // for finish

			$("#propertyShow").html(myfavslist).listview("refresh");

		}
	}

