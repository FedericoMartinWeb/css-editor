class CloseAside{

    constructor(){
        this.icon = document.querySelector('.site-header__menu-icon');
        this.aside = document.querySelector('.main-wrapper__aside');
        this.center = document.querySelector('.main-wrapper__center');
        this.events();
    }
    
    events(){
        this.icon.addEventListener('click', this.closeX.bind(this));
    }
    
    closeX(){
        this.icon.classList.toggle('site-header__menu-icon--close-x');
        this.aside.classList.toggle('main-wrapper__aside--hide');
        this.center.classList.toggle('main-wrapper__center--expand');
    }

}

export default CloseAside;