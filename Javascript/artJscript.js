var categories = ["Sketches", "Oil Paintings", "Watercolors", "Miscellaneous"];

var pictures = [
	[ "",
		"Second annual self portrait, 8\"x9\" drawing pad; January 2nd, 2015. Colored pencils and photoshop for background.",
		"Images/Art/self2.JPG",
		"Study drawing from a magazine, 18\"x24\" newsprint; February 21st, 2014. One brown colored pencil.",
		"Images/Art/model.JPG",
		"Entry into the World Children's Art Exhibition Contest, 11\"x18\" black sketch pad; March 18th, 2014. Colored pencils, oil pastels, and oil paint for the snow effect. Winner of Certificate of Merit.",
		"Images/Art/international1.JPG",
		"First annual self portrait, 8\"x9\" drawing pad; January 1st, 2014. `Colored pencils and photoshop for background.",
		"Images/Art/self1.JPG",
		"PTA Reflections 2015",
		"Images/Art/2015pta.JPG"
	],
	[ "",
	"Oil Paintings coming soon",
	"Images/Art/longoil.JPG",
	],
	[ "",
	"Watercolors coming soon",
	"Images/Art/2015birthday.JPG",
	],
	[ "",
		"Backdrop 1",
		"Images/Art/backdrop1.JPG",
		"Backdrop 2",
		"Images/Art/backdrop2.JPG"
	]];

var numPictures = 5;

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
				var indexImg = ((j+1)*2);
				if ( indexImg < pictures[i].length ){
					var imgDiv = document.createElement("div");
					imgDiv.setAttribute("class", "image");
					imgDiv.setAttribute("style", "width: 45%; padding: 2%; display: inline-block;");

					var img = document.createElement("img");
					img.setAttribute("SRC", pictures[i][indexImg]);
					img.setAttribute("style", "width: 100%");

					var textDiv = document.createElement("div");
					textDiv.setAttribute("class", "text");
					var text = document.createTextNode(pictures[i][indexImg-1]);
					textDiv.appendChild(text);

					imgDiv.appendChild(img);
					imgDiv.appendChild(textDiv);
					section.appendChild(imgDiv);
					// img.setAttribute("SRC", pictures[i][indexImg]);
					// img.setAttribute("style", "width: 45%; padding: 5%; display: inline-block;");
					//
					//
					// section.appendChild(img);
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
