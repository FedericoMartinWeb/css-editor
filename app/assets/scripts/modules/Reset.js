import $ from 'jquery';

class Reset{

    constructor(){
        this.reset = $('#reset');
        this.filters = $('.filters');
        this.divCode = $('.center--modal__code');
        this.events();
    }
    
    events(){
        this.reset.on('click', this.CallReset.bind(this));
    }
    
    CallReset(){
        this.filters.each(function(){
            this.val = $(this).attr('value');
            $(this).val(this.val);
            $(this).next().html(this.val);
            $('style').remove();
        });
        this.divCode.html('.filter {<br />    filter:; <br />}');
    }
}

export default Reset;