import $ from 'jquery';

class CloseAside{

    constructor(){
        this.icon = $('.site-header__menu-icon');
        this.aside = $('.aside');
        this.center = $('.center');
        this.events();
    }
    
    events(){
        this.icon.on('click', this.closeX.bind(this));
    }
    
    closeX(){
        this.icon.toggleClass('site-header__menu-icon--close-x');
        this.aside.toggleClass('aside--hide');
        this.center.toggleClass('center--expand');
    }

}

export default CloseAside;