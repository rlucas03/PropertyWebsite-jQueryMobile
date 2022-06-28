$(document).on("pagecreate", "#property", function() {

	$("#addbtn" ).click(function() {
		if (typeof(Storage) != "undefined") {
			storePropertyDetails(getPropertyId(), getPropertyTitle());
		} else {
			$("#nostorage").text("Local storage not supported");
		} 
		
	});
});

function getPropertyId() {
	var propertyId = $("#propertyid").text();
	return propertyId; 
}

function getPropertyTitle() {
	var propertyTitle = $("#propertytitle").text();
	return propertyTitle;
}



function displayPropertyDetails (details) {
	var myfavslist = "";
	for (var k = 0; k < details.length; k++) {
		myfavslist += "<li><a href = property.html1?id=" + details[k].propertyid +
		" class ='ui-btn- ui-corner-all ui-icon-arrow-r ui-btn-icon-right'>" +
		details[k].propertytitle + "</a></li>";
	} // fpr finished
	$("propertyShow").html(myfavslist).listview("refresh");

} 

function storePropertyDetails (id, title) {
	// my house items
	var items; // this is list
	// my house info
	var info = {propertyid: id, propertytitle: title};
	if (localStorage.getItem('propertyToShow') === null) {

		// if we got our propertToShow file emptu json 
		items = [];
		items.push(info);
	} else {
	// else possibly info data inside the
		items = JSON.parse(localStorage.getItem('propertyToShow'));
		var propertyIdPref = $("propertyid").text();
		// now to unto any replicates 
		// wont add twice to favs

		for (var i = 0; i < items.length; i++) {
			// check hoyse ids against each other
			if (items[i].propertyid == propertyIdPref) {
				// pop up to customer informing house already exists
				alert('Property already exists in favourites');
				return false;
			} // end if
		} // for finished
		items.push(info);
 
	} 
	alert('Property saved to favourites');
	localStorage.setItem("propertyToShow",JSON.stringify(items));
} // function ends