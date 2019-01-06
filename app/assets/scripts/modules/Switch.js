import $ from 'jquery';

class Switch{

    constructor(){
        this.switch();
    }
    
    switch(){
        var sepia = $('#sepia-value').html();
        var blur = $('#blur-value').html();
        var bright = $('#bright-value').html();
        var gray = $('#gray-value').html();
        var contrast = $('#contrast-value').html();
        var hue = $('#hue-value').html();
        var inv = $('#invert-value').html();
        var sat = $('#saturate-value').html();
        
        var css = '.filter {\n';
        css += '    filter:';
        if (sepia!="0"){
            css += ' sepia('+sepia+'%)';
        }
        if (blur!="0"){
            css += ' blur('+blur+'px)';
        }
        if (bright!="1"){
            css += ' brightness('+bright+')';
        }
        if (gray!="0"){
            css += ' grayscale('+gray+'%)';
        }
        if (contrast!="1"){
            css += ' contrast('+contrast+')';
        }
        if (hue!="0"){
            css += ' hue-rotate('+hue+'deg)';
        }
        if (inv!="0"){
            css += ' invert('+inv+')';
        }

        if (sat!="1"){
            css += ' saturate('+sat+')';
        }

        css += ';\n}\n\n';

        if($('.input-color').val() === "#ff2200"){
            var blend = "";
        } else { 
            var blend = '.filter::before {\n';
            blend += '    background: ' + $('.input-color').val();
            blend += ';\n';
            blend += '    mix-blend-mode: ' + $('.blend-wrapper__select').val();
            blend += ';\n}';
        }
        
        
        var codeDiv = $('.center--modal__code');
        codeDiv.html(css + blend);

        $('style').remove();
        $('head').append('<style type="text/css">' + css + blend + '</style>');
        return css;
    }
}

export default Switch;