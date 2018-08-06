import $ from 'jquery';

class Items{

    constructor(){
        this.title = $('.aside__title');
        this.events();
    }
    
    events(){
        this.title.on('click', this.triangleAnimation);
    }
    
    triangleAnimation(){
        $(this).toggleClass('aside__title--animation');
        $(this).next().toggleClass('slider--hide');
        $(this).nextAll().eq(1).toggleClass('aside__number--hide');
    }
}

export default Items;