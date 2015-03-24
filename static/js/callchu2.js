// MT1.11 Compat
var trackEvent = function(ev) {
    window['optimizely'] = window['optimizely'] || [];
    window.optimizely.push(["trackEvent", ev]);

    ga('send', 'event', ev);
};

$(document).on('can_embed_loaded', function() {

	console.log( "ready!" );
	
	var fieldError = function(name, text) {
        var f = $('input[name="'+name+'"]');
        f.addClass('phone-error');

        var err = $('ul#phone-errors');
        err.append('<li>'+text+'</li>');
        return false;
    };

    var validatePhone = function(num) {
        num = num.replace(/\s/g, '').replace(/\(/g, '').replace(/\)/g, '');
        num = num.replace("+", "").replace(/\-/g, '');

        if (num.charAt(0) == "1")
            num = num.substr(1);

        if (num.length != 10)
            return false;

        return num;
    };

    can_embed_submitted = function(e) {
        // e.preventDefault();
		
		// clear validation errors
        $('form[name="act"] input').removeClass('phone-error');
        $('ul#phone-errors').empty();

        var phone = $('#phone').val();
        if (!validatePhone(phone)) {
			e.preventDefault();
            return fieldError('phone','Please enter a valid US phone number');
        }

        var data = {
            campaignId: '18mr-nn',
            userPhone: validatePhone(phone)
        };

        $.ajax({
            url: 'http://call-server-dp.herokuapp.com/create',
            type: "get",
            dataType: "json",
            data: data,
            success: function(res) {
                trackEvent('call-congress');

                console.log('Placed call-congress call: ', res);
            }
        });
    };
    $('#new_signature').submit(can_embed_submitted);

    $('#new_signature').submit(function(e) {
        e.preventDefault();
        $('#').click();
    });

    $('#email_button').click(function(e) {

        if (!validateEmail($('#email').val()))
            return fieldError('email','Please enter a valid email address!');

        $('#email_form_fields').addClass('fade');
        $('.thanks').addClass('visible');
        setTimeout(function() {
            $('#email_form_fields').hide();
        }, 500);

        var form = $('#emailForm');
        $.post(form.attr('action'), form.serialize(), function(data){});

    });

});