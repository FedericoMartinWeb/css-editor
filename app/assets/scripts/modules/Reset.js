import $ from 'jquery';

class Reset{

    constructor(){
        this.reset = $('#reset');
        this.filters = $('input[type=range]');
        this.events();
    }
    
    events(){
        this.reset.on('click', this.CallReset.bind(this));
    }
    
    CallReset(){
        this.filtersval = this.filters.each(function(){
            this.filteroriginalval = $(this).attr('value');
            
            $(this).next().html(this.filteroriginalval);
            $(this).val(this.filteroriginalval);
            $('#img').removeAttr('style');
        });
    }

}

export default Reset;