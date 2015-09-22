var categories = [
{"media": "Sketch"}, 
{"media": "Oil Paintings"}, 
{"media": "Watercolors"}];

var pictures = [
{"post1" : "Second annual self portrait, 8\"x9\" drawing pad; January 2nd, 2015. Colored pencils and photoshop for background."}, 
{"post1" : "Oil Paintings coming soon"},
{"post1" : "Watercolors coming soon"}
];

var numPictures = 1; 

function changePicture(){
	var value = $('#options').val();
	$('#picHolder').attr('src', "Images/" + value);
}

function showCategories(){
	var div = document.createElement("div");
	div.setAttribute("class", "menu");
	var divSec = document.createElement("div");
	divSec.setAttribute("class", "menu-section");
	for ( var i = 0; i < categories.length; i++ ){
		var a = document.createElement("a");
		a.setAttribute("class", "menu-section-title");
		a.setAttribute("href", "#menu-" + i);
		var text = document.createTextNode(categories[i].media);
		a.appendChild(text);

		var divContent = document.createElement("div");
		divContent.setAttribute("id", "menu-" + i);
		divContent.setAttribute("class", "menu-section-content");

		for ( var j = 0; j < numPictures; j++ ){
			var p = document.createElement("p");
			var text = document.createTextNode(getPicture(i, j));
			p.appendChild(text);
			divContent.appendChild(p);
		}

		divSec.appendChild(a);
		divSec.appendChild(divContent);
	}
	div.appendChild(divSec);
	document.getElementById("category").appendChild(div);
}

function getPicture( i, j ){
	if ( j == 0 ){
		return pictures[i].post1;
	}
	else if ( j == 1 ){
		return pictures[i].post2;
	}
	else{
		return "nothing found";
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
