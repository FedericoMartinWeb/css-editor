import $ from 'jquery';

class Main{

   constructor(){
       this.img = $('#img');
       this.filterinput = $('input[type=range].filters');
       this.border = $('#border input');
       this.sepia = $('#sepia input');
       this.blur = $('#blur input');
//       this.bright = $('#bright input');
       this.events();
   }
   
   events(){
       this.border.on('input', this.callBorder.bind(this));
       this.filterinput.on('input', this.filters.bind(this));
//       this.blur.on('input', this.callBlur.bind(this));
   }
   
   callBorder(){
       this.borderval = this.border.val();
       this.border.next().html(this.borderval);
       this.img.css('border-radius', this.borderval + 'px');
   }

   filters(){
       this.sepiaval = this.sepia.val();
       this.blurval = this.blur.val();
       this.blur.next().html(this.blurval);
       this.img.css('filter', 'sepia(' + this.sepiaval + '%) blur(' + this.blurval + 'px');
   }

//   callBlur(){
//       this.blurval = this.blur.val();
//       this.blur.next().html(this.blurval);
//       this.img.css('filter', 'blur(' + this.blurval + 'px)');
//   }

//   callBright(){
//       this.brightval = this.bright.val();
//       this.bright.next().html(this.brightval);
//       this.img.css('filter', 'brightness(' + this.brightval + '%)');
//   }

   // addBlur(){
   //     this.blurval = this.blur.value;
   //     if(this.blurval == 0) { alert('0000') } else {
   //         this.modifi.style.filter = 'blur(' +  this.blurval  + 'px)';
   //     }
   // }

   // callCss(){
       
   //     this.attrstyle = this.modifi.getAttribute('style');
       
   //     if(this.attrstyle !== null){
   //         this.props.innerHTML = "<p class='attr'>" + this.attrstyle + "</p>";
   //         this.regularExpression = /;(?=(((?!\]).)*\[)|[^\[\]]*$)/g;
   //         this.replace = this.attrstyle.replace(this.regularExpression, ';<br />');
   //         if(this.regularExpression.test(this.attrstyle) === true){
   //             this.props.innerHTML = this.replace;
   //         }
   //     }else{
   //         this.props.innerHTML = 'nothing to show here mate';
   //     }
   // }

}

export default Main;

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