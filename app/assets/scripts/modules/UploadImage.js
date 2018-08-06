import $ from 'jquery';

class UploadImage{

    constructor(){
        this.CallImg();
    }
    
    CallImg() {
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('.center__img--core').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#uFile").on('change', function(){
            readURL(this);
        });
    }
}

export default UploadImage;