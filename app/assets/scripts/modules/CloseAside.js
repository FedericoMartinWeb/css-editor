import $ from 'jquery';

class CloseAside{

    constructor(){
        this.icon = $('.site-header__menu-icon');
        this.aside = $('.main-wrapper__aside');
        this.center = $('.main-wrapper__center');
        this.events();
    }
    
    events(){
        this.icon.on('click', this.closeX.bind(this));
    }
    
    closeX(){
        this.icon.toggleClass('site-header__menu-icon--close-x');
        this.aside.toggleClass('main-wrapper__aside--hide');
        this.center.toggleClass('main-wrapper__center--expand');
    }

}

export default CloseAside;