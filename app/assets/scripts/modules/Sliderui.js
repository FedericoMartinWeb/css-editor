import $ from 'jquery';
import Switch from '../modules/Switch';
var switchit = new Switch();

class Sliderui{

    constructor(){
        this.Sliders();
        this.Color();
    }
    
    Sliders(){
        $('.filters').each(function(){
            $(this).on('input', function(){
                $(this).next().text($(this).val());
                switchit.switch();
            });
        });
    }

    Color(){
        $('.input-color').each(function(){
            $(this).on('input', function(){
                switchit.switch();
            });
        });
    }
}

export default Sliderui;