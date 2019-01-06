import $ from 'jquery';

class Blend{

    constructor(){
        this.inputcheck = $('#blend-wrapper__check');
        this.blendoptions = $('.blend-wrapper__options');
        this.selectoptions = $('.blend-wrapper__select');
        this.events();
    }
    
    events(){
        this.inputcheck.on('click', this.BlendCheck.bind(this));
        this.selectoptions.on('input', this.SelectOptions.bind(this));
    }
    
    BlendCheck(){
        console.log(this.inputcheck.is(':checked'));
        this.blendoptions.toggleClass('showHide');  
        $('.center__img--wrapper').toggleClass('killbg');
    }
    
    SelectOptions(){
        console.log(this.selectoptions.val()); 
        console.log($('#blend-wrapper__check').is(':checked'));
    }
}

export default Blend;