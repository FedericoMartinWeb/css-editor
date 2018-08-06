import $ from 'jquery';

class CssGene{

    constructor(){
        this.centermodal = $('.center--modal');
        this.asidemodal = $('.aside--modal');
        this.mainwrapperaside = $('.aside');
        this.css = $('#cssgene');
        this.img = $('#img');
        this.events();
    }
    
    events(){
        this.css.on('click', this.showCss.bind(this));
    }
    
    showCss(){
        this.centermodal.addClass('center--modal--show');
        this.asidemodal.addClass('aside--modal--show');
        this.mainwrapperaside.css('overflow-y', 'hidden');
    }

}

export default CssGene;