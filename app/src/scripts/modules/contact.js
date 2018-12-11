$(function() {

	// Contact form
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})

	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');

	// Submit form
	$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

		var formData = $(form).serialize();
		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			 // Make sure that the formMessages div has the 'success' class.
			 $(formMessages).removeClass('error');
			 $(formMessages).addClass('success');
	 
			 // Set the message text.
			 $(formMessages).text(response);
	 
			 // Clear the form.
			 $('#name').val('');
			 $('#email').val('');
			 $('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
	
			// Set the message text.
			if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
			} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});

	