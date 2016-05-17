$(document).ready(function(){
// 1. The text under "Click for short bio" should not be visible unless the user clicks the flip id.
//    Hint: Google the jQuery slideToggle function
	//$('.content').hide();
	$('#flip').click(function() {
		$('.content').slideToggle("slow");
	});
	

// 2. When hovering over the h4 tags (Objective, Experience, etc..), 
//    the inside of the dotted box should turn light blue and remain light blue.

	$('h4').hover(function() {
		$(this).css('background-color', '#add8e6');
	});


// 3. When any of the project images is clicked, it should expand to 300px wide.


	$('ul li img').click(function() {
		$(this).css('width', '300px');
	});


// 4. When clicking the "Alternate Color Theme" button, it should toggle the "changeTextColors" class.
//    Additionally, the h4 tag hover that you created in #2 should turn white.
//    Also, the background should change to the dark_embroidery.png image located the images directory.

	$('#low-vision').click(function() {
		$('.changeTextColors').toggleClass(); ///??? Not Working
		$('h4').css('background-color', '#fff');
		$('body').css('background-image', 'url(images/dark_embroidery.png)');
	});



// 5. When hovering over the Twitter, Instagram, and LinkedIn buttons, the background behind the buttons should turn #6bd2db.
//    This has not been loaded into a CSS class and must be done within the function.
//    Make sure you get those corners rounded so the color doesn't pop out in the corners!
  
  	$('#social-links img').hover(function() {
		$(this).css({'background-color': '#6bd2db', 'border-radius' : '15px'});
	});
  	

//BONUS
//       The contact area contains a span that can be clicked to reveal the contact info. 
//       The HTML and CSS have been written for you to enable this functionality with jQuery.  
//       The user should click a button next to the person's name to reveal the phone number and email address.
 	    
		$('.reference-contact').hide();
		var button = $('<button>Show Info</button>').click(function () {
            $('.reference-contact').show();
        });
        $(".content").append(button);


});
