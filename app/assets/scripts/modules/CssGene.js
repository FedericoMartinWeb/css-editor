import $ from 'jquery';

class CssGene{

    constructor(){
        this.centermodal = $('.main-wrapper__center--modal');
        this.asidemodal = $('.main-wrapper__aside--modal');
        this.mainwrapperaside = $('.main-wrapper__aside');
        this.css = $('#cssgene');
        this.img = $('#img');
        this.events();
    }
    
    events(){
        this.css.on('click', this.showCss.bind(this));
    }
    
    showCss(){
        this.centermodal.addClass('main-wrapper__center--modal--show');
        this.asidemodal.addClass('main-wrapper__aside--modal--show');
        this.mainwrapperaside.css('overflow-y', 'hidden');
        this.imageattr = this.img.attr('style');
        
        if(this.imageattr != undefined){
            this.centermodal.html("<p>" + this.imageattr + "</p>");
            this.regularExpression = /;(?=(((?!\]).)*\[)|[^\[\]]*$)/g;
            this.replace = this.imageattr.replace(this.regularExpression, ';<br />');
            if(this.regularExpression.test(this.imageattr)){this.centermodal.html(this.replace);}
        }else{
            this.centermodal.html("Nothing to show yet!");
        }
    }

}

//    callCss(){
//        
//        this.attrstyle = this.modifi.getAttribute('style');
//        
//        if(this.attrstyle !== null){
//            this.props.innerHTML = "<p class='attr'>" + this.attrstyle + "</p>";
//            this.regularExpression = /;(?=(((?!\]).)*\[)|[^\[\]]*$)/g;
//            this.replace = this.attrstyle.replace(this.regularExpression, ';<br />');
//            if(this.regularExpression.test(this.attrstyle) === true){
//                this.props.innerHTML = this.replace;
//            }
//        }else{
//            this.props.innerHTML = 'nothing to show here mate';
//        }
//    }

export default CssGene;