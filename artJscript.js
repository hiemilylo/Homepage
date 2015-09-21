var categories = [{"media": "Sketch"}, {"media": "Oil Paintings"}, {"media": "Watercolors"}];

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
		var p = document.createElement("p");

		divContent.appendChild(p);
		divSec.appendChild(a);
		divSec.appendChild(divContent);
	}
	div.appendChild(divSec);
	document.getElementById("category").appendChild(div);

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
