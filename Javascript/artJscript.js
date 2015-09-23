var categories = ["Sketch", "Oil Paintings", "Watercolors"];

var pictures = [
{"post1" : "Second annual self portrait, 8\"x9\" drawing pad; January 2nd, 2015. Colored pencils and photoshop for background.",
	"post1img" : "Images/Art/self2.JPG", 
	"post2" : "Study drawing from a magazine, 18\"x24\" newsprint; February 21st, 2014. One brown colored pencil.",
	"post2img" : "Images/Art/model.JPG"},
{"post1" : "Oil Paintings coming soon",
	"post1img" : "Images/Art/2015 birthday.JPG",
	"post2" : "NN",
	"post2img" : "NN"},
{"post1" : "Watercolors coming soon",
	"post1img" : "Images/Art/2015 birthday.JPG",
	"post2" : "NN",
	"post2img" : "NN"}];

var numPictures = 2; 

function changePicture(){
	var value = $('#options').val();
	$('#picHolder').attr('src', "Images/" + value);
}

function showCategories(){
	var div = document.createElement("div");
	div.setAttribute("class", "menu");
	// div.setAttribute("style", "padding:10%;");
	// // div.setAttribute("style", "padding-color: ")
	var divSec = document.createElement("div");
	divSec.setAttribute("class", "menu-section");

	for ( var i = 0; i < categories.length; i++ ){
		var a = document.createElement("a");
		a.setAttribute("class", "menu-section-title");
		a.setAttribute("href", "#menu-" + i);
		var text = document.createTextNode(categories[i]);
		a.appendChild(text);

		var divContent = document.createElement("div");
		divContent.setAttribute("id", "menu-" + i);
		divContent.setAttribute("class", "menu-section-content");

		for ( var j = 0; j < numPictures; j++ ){

			if ( getPicture(i,j,1) != "NN" ){
				var p = document.createElement("p");
				var img = document.createElement("IMG");
				img.setAttribute("SRC", getPicture(i, j, 2));
				img.setAttribute("style", "width: 400;");
				p.appendChild(img);
				var text = document.createTextNode(getPicture(i, j, 1));
				p.appendChild(text);
				// <IMG id ="self" SRC="Images/Art/self2.JPG" width = 400;></IMG> <br>
				divContent.appendChild(p);
			}
		}

		divSec.appendChild(a);
		divSec.appendChild(divContent);
	}
	div.appendChild(divSec);
	document.getElementById("category").appendChild(div);
}

function getPicture( i, j, k ){
	if ( k === 1 ){ // wants text
		if ( j == 0 ){
			return pictures[i].post1;
		}
		else if ( j == 1 ){
			return pictures[i].post2;
		}
		else{
			return "NN";
		}
	}
	else{
		if ( j == 0 ){
			return pictures[i].post1img;
		}
		else if ( j == 1 ){
			return pictures[i].post2img;
		}
		else{
			return "NN";
		}
	}
}

$(document).ready(function() {
    function close_menu_section() {
        $('.menu .menu-section-title').removeClass('active');
        $('.menu .menu-section-content').slideUp(300).removeClass('open');
    }
 
    $('.menu-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_menu_section();
        }else {
            close_menu_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.menu ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
showCategories();
