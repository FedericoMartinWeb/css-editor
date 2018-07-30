import $ from 'jquery';

class Items{

    constructor(){
        this.title = $('.main-wrapper__title');
        this.events();
    }
    
    events(){
        this.title.on('click', this.triangleAnimation);
    }
    
    triangleAnimation(){
        $(this).toggleClass('main-wrapper__title--animation');
        $(this).next().toggleClass('slider--hide');
        $(this).nextAll().eq(1).toggleClass('main-wrapper__number--hide');
    }
}

export default Items;