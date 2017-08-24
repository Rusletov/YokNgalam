// dropdown menu for mobiles 

$(document).ready(function() {
	$('#burger-nav').click(function() {
		$('#main-nav ul').toggleClass('open');
	}); // end click
}); //end ready

// end dropdown menu for mobiles

// contact form 
$(document).ready(function() {
	$('#contact-form').submit(function() {
		if ($('#email').val() == '') {
			alert('Fill in the e-mail in the field.');
			return false;
		} else if ($('#company').val() == '') {
			alert('Fill in the company name in the field.');
			return false;
		} else if ($('#subject').val() == '') {
			alert('Fill in the subject in the field.');
			return false;
		} else if ($('#message').val() == '') {
			alert('Fill in the message in the field.');
			return false;
		} 
	}); //end submit
}); // end ready

// end contact form