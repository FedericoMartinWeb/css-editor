import $ from 'jquery';
import "jquery-ui-slider/jquery-ui.min";
import Switch from '../modules/Switch';
var switchit = new Switch();

class Sliderui{

    constructor(){
        this.Sliders();
    }
    
    Sliders(){
    $( "#sepia-value-out" ).slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 100,
		value: 0,
		slide: function( event, ui ) {
			$( "#sepia-value" ).text(ui.value + "%");
           console.log(switchit.switch());
		}
	});
	$( "#sepia-value" ).text( $( "#sepia-value-out" ).slider( "value" ) + "%"); 
    }
}

export default Sliderui;