import $ from 'jquery';
import "jquery-ui-slider/jquery-ui.min";

class Reset{

    constructor(){
        this.reset = $('#reset');
        this.filters = $('.slider');
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
    }
}

export default Reset;