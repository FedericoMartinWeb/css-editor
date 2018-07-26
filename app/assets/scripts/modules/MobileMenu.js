import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();
        this.scroll();
    }
    
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    scroll(){
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            var winVH = $(window).height();

            if (scroll >= winVH) {
                $(".goup").addClass("showup");
            } else {
                $(".goup").removeClass("showup");
            }
        });
    }
    
    toggleTheMenu(){
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;