var categories = ["Sketches", "Oil Paintings", "Watercolors"];

var pictures = [
	[ "",
		"Second annual self portrait, 8\"x9\" drawing pad; January 2nd, 2015. Colored pencils and photoshop for background.",
		"Images/Art/self2.JPG",
		"Study drawing from a magazine, 18\"x24\" newsprint; February 21st, 2014. One brown colored pencil.",
		"Images/Art/model.JPG",
		"International competition.",
		"Images/Art/international1.JPG"
	],
	[ "",
		"Oil Paintings coming soon",
		"Images/Art/2015birthday.JPG",
	],
	[ "",
		"Watercolors coming soon",
		"Images/Art/2015birthday.JPG",
	]];

var numPictures = 3;



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
			var text = document.createTextNode(categories[i]);
			a.appendChild(text);

			var divContent = document.createElement("div");
			divContent.setAttribute("id", "menu-" + i);
			divContent.setAttribute("class", "menu-section-content");
			var section = document.createElement("section");
			section.setAttribute("style", "display: inline-block");

			for ( var j = 0; j < numPictures; j++ ){
				var indexDes = ((j+1)*2);
				if ( indexDes < pictures[i].length ){
					var img = document.createElement("IMG");

					img.setAttribute("SRC", pictures[i][indexDes]);
					img.setAttribute("style", "width: 45%; padding: 5%; display: inline-block;");

					section.appendChild(img);
					// var text = document.createTextNode(pictures[i][(j+1)*2-1]);
					// section.appendChild(text);
				}
				divContent.appendChild(section);
			}

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
