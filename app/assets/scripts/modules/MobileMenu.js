//class MobileMenu{
//
//    constructor(){
//        this.modifi = document.querySelector('.modifi');
//        this.slider = document.querySelector('.slider');
//        this.contador = document.querySelector('.contador');
//        this.color = document.querySelector('.color');
//        this.blur = document.querySelector('.blur');
//        this.propbutton = document.querySelector('.propbutton');
//        this.props = document.querySelector('.props');
//        this.events();
//    }
//    
//    events(){
//        this.slider.addEventListener('input', this.spacing.bind(this));
//        this.color.addEventListener('input', this.changeColor.bind(this));
//        this.blur.addEventListener('input', this.addBlur.bind(this));
//        this.propbutton.addEventListener('click', this.callCss.bind(this));
//    }
//    
//    spacing(){
//        this.sliderval = this.slider.value;
//        this.contador.innerHTML = this.sliderval;
//        this.modifi.style.padding = this.sliderval + 'px';
//    }
//
//    changeColor(){
//        this.colorval = this.color.value;
//        this.modifi.style.backgroundColor = this.colorval;
//    }
//
//    addBlur(){
//        this.blurval = this.blur.value;
//        if(this.blurval == 0) { alert('0000') } else {
//            this.modifi.style.filter = 'blur(' +  this.blurval  + 'px)';
//        }
//    }
//
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
//
//}
//
//export default MobileMenu;