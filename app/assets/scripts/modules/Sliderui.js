import $ from 'jquery';
import "jquery-ui-slider/jquery-ui.min";

class Sliderui{

    constructor(){
        this.Sliders();
    }
    
    Sliders(){
    
    $( "#dale" ).slider({
		orientation: "horizontal",
		min: 0,
		max: 100
	});
    }
}

export default Sliderui;