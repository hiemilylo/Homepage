var categories = [{"media": "Sketch"}, {"media": "Oil Paintings"}, {"media": "Watercolors"}];

function changePicture(){
	var value = $('#options').val();
	$('#picHolder').attr('src', "Images/" + value);
}

function showCategories(){
	// var div = document.createElement("div");
	// var p = document.createElement("p");

	for (var i = 0; i< categories.length; i++) {
		var div = document.createElement("div");
		var p = document.createElement("p");
		p.setAttribute("style", "border-radius: 0px; border-style: none; background-color: #555555;");
		//  p{
		// 	font-family: 'Open Sans', sans-serif;
		// 	margin: 25px 100px 30px 100px;
		// 	padding: 25px 50px 30px 100px;
		// 	background-color: #FFFFFF;
		// 	border-style: solid;
		// 	border-radius: 15px;
		// 	border-width: 5px;
		// 	border-color: #94DBFF;
		// 	word-wrap: break-word;
		// } 
		p.name = categories[i].media;
		p.addEventListener("click", function() {
			console.log("clicked");
		});
		var font = document.createElement("font");
		font.setAttribute("style", "color: #FFFFFF;");
		var text = document.createTextNode(categories[i].media);
		font.appendChild(text);
		p.appendChild(font);
		div.appendChild(p);
		document.getElementById("category").appendChild(div);
	}
}

showCategories();
