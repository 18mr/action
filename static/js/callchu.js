var $E = function(selector, filter){
	return ($(filter) || document).getElement(selector);
};

var $ES = function(selector, filter){
	return ($(filter) || document).getElements(selector);
};

jQuery( document ).ready(function( $ ) {

    var fieldError = function(name, text) {
        var f = $('input[name="'+name+'"]');
        f.addClass('field-error');

        var err = $('ul#field-errors');
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
	//        e.preventDefault();

        // clear validation errors
         $('form[id="new_signature"] input').removeClass('field-error');
         $('ul#field-errors').empty();

        var phone = $('#phone').val();
        if (!validatePhone(phone)) {
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
		return true;
	};
    $('#new_signature').submit(can_embed_submitted);
});