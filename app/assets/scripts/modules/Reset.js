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
        $('.slider').slider('value', 0);
            $('style').remove();
        
//        this.filtersval = this.filters.each(function(){
//            
//////            
//////            $(this).next().html(this.filteroriginalval);
//////            $(this).val(this.filteroriginalval);
//////            $('#img').removeAttr('style');
//        });
        
        
    }

}

export default Reset;