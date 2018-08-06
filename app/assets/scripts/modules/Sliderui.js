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
				$( "#sepia-value" ).text(ui.value);
	        	switchit.switch();
			}
		});
		$( "#sepia-value" ).text( $( "#sepia-value-out" ).slider( "value" ));

		$( "#blur-value-out" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 10,
			step: 0.01,
			value: 0,
			slide: function( event, ui ) {
				$( "#blur-value" ).text(ui.value);
	           	switchit.switch();
			}
		});
		$( "#blur-value" ).text( $( "#blur-value-out" ).slider( "value" ));

		$( "#bright-value-out" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 3,
			step: 0.01,
			value: 1,
			slide: function( event, ui ) {
				$( "#bright-value" ).text(ui.value);
	           	switchit.switch();
			}
		});
		$( "#bright-value" ).text( $( "#bright-value-out" ).slider( "value" ));

		$( "#gray-value-out" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: 0,
			slide: function( event, ui ) {
				$( "#gray-value" ).text(ui.value);
	           	switchit.switch();
			}
		});
		$( "#gray-value" ).text( $( "#gray-value-out" ).slider( "value" ));

		$( "#contrast-value-out" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 3,
			step: 0.01,
			value: 1,
			slide: function( event, ui ) {
				$( "#contrast-value" ).text(ui.value);
	           	switchit.switch();
			}
		});
		$( "#contrast-value" ).text( $( "#contrast-value-out" ).slider( "value" ));

		$( "#hue-value-out" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 360,
			value: 0,
			slide: function( event, ui ) {
				$( "#hue-value" ).text(ui.value);
	           	switchit.switch();
			}
		});
		$( "#hue-value" ).text( $( "#hue-value-out" ).slider( "value" ));
    }
}

export default Sliderui;