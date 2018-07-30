import $ from 'jquery';

class Items{

    constructor(){
        this.title = $('.main-wrapper__title');
        this.slider = $('.slider');
        this.number = $('.main-wrapper__number');
        this.events();
    }
    
    events(){
//        this.title.addEventListener('click', this.triangleAnimation.bind(this));
        this.title.on('click', this.triangleAnimation);
        this.title.on('click', this.hideSlider.bind(this));
//        this.title.on('click', this.hideNumber);
    }
    
    triangleAnimation(){
        $(this).toggleClass('main-wrapper__title--animation');
//        this.removeClass('main-wrapper__title');
    }
    
    hideSlider(){
        this.slider.toggleClass('slider--hide');
    }
    
//    hideNumber(){
//        $(this).toggleClass('main-wrapper__number--hide');
//    }
}

export default Items;

//class Items{
//
//    constructor(){
//        this.title = document.querySelector('.main-wrapper__title');
//        this.slider = document.querySelector('.slider');
//        this.number = document.querySelector('.main-wrapper__number');
//        this.events();
//    }
//    
//    events(){
//        this.title.addEventListener('click', this.triangleAnimation.bind(this));
//        this.title.addEventListener('click', this.hideSlider.bind(this));
//        this.title.addEventListener('click', this.hideNumber.bind(this));
//    }
//    
//    triangleAnimation(){
//        this.title.classList.toggle('main-wrapper__title--animation');
////        e.target.classList.toggle('main-wrapper__title--animation');
//    }
//    
//    hideSlider(){
//        this.slider.classList.toggle('slider--hide');
//    }
//    
//    hideNumber(){
//        this.number.classList.toggle('main-wrapper__number--hide');
//    }
//
//}
//
//export default Items;