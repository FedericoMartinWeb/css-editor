import $ from 'jquery';
import "jquery-ui-slider/jquery-ui.min";

class Reset{

    constructor(){
        this.reset = $('#reset');
        this.filters = $('.slider');
        this.divCode = $('.center--modal__code');
        this.events();
    }
    
    events(){
        this.reset.on('click', this.CallReset.bind(this));
    }
    
    CallReset(){
        this.filtersval = this.filters.each(function(){
            this.val = $(this).attr('data-value');
            $(this).slider('value', this.val);
            $(this).next().html(this.val);
            $('style').remove();
        });
        this.divCode.html('.filter { <br /> -webkit-filter:;<br /> filter:; <br />}');
    }
}

export default Reset;