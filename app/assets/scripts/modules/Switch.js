import $ from 'jquery';

class Switch{

    constructor(){
        this.switch();
    }
    
    switch(){
        var sepia = $('#sepia-value').html();
        
        var css = '.filter {\n';
        css += '  -webkit-filter:';
        if (sepia!="0%"){
            css += ' sepia('+sepia+')';
        }
        css += ';\n';
        css += '  filter:';
        if (sepia!="0%"){
            css += ' sepia('+sepia+')';
        }
        css += ';\n}\n';
        
        var codeDiv= $("code");
			
        if(codeDiv.innerText){
            codeDiv.innerText = css
        }else{
            codeDiv.textContent = css
        }
        
        $('style').remove();
        $('head').append('<style type="text/css">' + css + '</style>');
        return css;
    }
}

export default Switch;