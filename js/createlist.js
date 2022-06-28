// // $(document).on("pagecontainerbeforeshow", function (e, ui) {
// 	var page = ui.toPage[0].id;
// 	if( page == 'first' ) {
// 		$.get("info/property.json", function(result, status) {
// 		var property = "";
// 		for (var i = 0; i < result.length; i++) {
// 		hotel += 
// 		"<li><a href='property1.html?id=" + 
// 		result[i].id + 
// 		"'>" + 
// 		result[i].name + 
// 		"</a></li>";
// 		}
// 		$("#propertylist").html(property).listview("refresh");
// 		}, "json");	
// 	}
// });