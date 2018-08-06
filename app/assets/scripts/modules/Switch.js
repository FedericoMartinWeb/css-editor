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
        
        var css = '.filter {\n';
        css += '  -webkit-filter:';
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
        css += ';\n';
        css += '  filter:';
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

        css += ';\n}\n';
        
        // var codeDiv = document.getElementById('code');
			
        // if(codeDiv.innerText){
        //     codeDiv.innerText = css
        // }else{
        //     codeDiv.textContent = css
        // }
        
        $('style').remove();
        $('head').append('<style type="text/css">' + css + '</style>');
        return css;
    }
}

export default Switch;