import $ from 'jquery';

class CssGene{

    constructor(){
        this.centermodal = $('.center--modal');
        this.asidemodal = $('.aside--modal');
        this.mainwrapperaside = $('.aside');
        this.css = $('#cssgene');
        this.close = $('.center--modal__close');
        this.img = $('#img');
        this.events();
    }
    
    events(){
        this.css.on('click', this.showCss.bind(this));
        this.close.on('click', this.closeCss.bind(this));
    }
    
    showCss(){
        this.centermodal.addClass('center--modal--show');
        this.asidemodal.addClass('aside--modal--show');
        this.mainwrapperaside.css('overflow-y', 'hidden');
    }

    closeCss(){
        this.centermodal.removeClass('center--modal--show');
        this.asidemodal.removeClass('aside--modal--show');
        this.mainwrapperaside.css('overflow-y', 'scroll');
    }

}

export default CssGene;