// MT1.11 Compat
var trackEvent = function(ev) {
    window['optimizely'] = window['optimizely'] || [];
    window.optimizely.push(["trackEvent", ev]);

    ga('send', 'event', ev);
};

jQuery( document ).ready(function() {

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
        showOverlay();
        return true;
    };
    $('#new_signature').submit(can_embed_submitted);

    $('#new_signature').submit(function(e) {
        e.preventDefault();
        $('#email_button').click();
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

    $('a.close').click(function (e){
        $('.overlay').removeClass('visible');
    });

});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}