<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Css Editor</title>
    
    <!-- Meta tags -->
    <meta name="description" content="Desarrollo profesional de sitios web, 100% adaptables a todos los dispositivos">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Styles css -->
    <link rel="stylesheet" href="../app/temp/styles/styles.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i" rel="stylesheet">
    
    <!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	
</head>
<body>
    
    <!-- Header Start -->
    <header class="site-header">
       <div class="site-header__menu-icon">
           <div class="site-header__menu-icon__middle"></div>
       </div>
        <h1 class="site-header__title">Css &lt;img&gt; Editor</h1>
    </header>
    <!-- Header End -->

    <main class="main-wrapper">
        <aside class="aside">
            <div class="aside--modal"></div>
            <div class="aside--item">
                <div class="aside--item--wrapper-file">
                    <span class="aside--item--wrapper-file--title">Upload your image!</span>
                    <input type="file" class="aside--item--wrapper-file--core" id="uFile">
                </div>
                <input type="button" id="cssgene" class="button" value="Generate Css!">
            </div><!-- 
            <div class="aside--item" id="border">
                <div class="aside__title">Border-radius</div>
                <input type="range" class="slider" value="0" max="100">
                <div class="slider"></div>
                <div class="aside__number">0</div>
            </div> -->
            <div class="aside--item">
                <div class="aside__title">Sepia</div>
                <div class="slider" id="sepia-value-out" data-value='0'></div>
                <div class="aside__number" id="sepia-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Blur</div>
                <div class="slider" id="blur-value-out" data-value='0'></div>
                <div class="aside__number" id="blur-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Brightness</div>
                <div class="slider" id="bright-value-out" data-value='1'></div>
                <div class="aside__number" id="bright-value">1</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Grayscale</div>
                <div class="slider" id="gray-value-out" data-value='0'></div>
                <div class="aside__number" id="gray-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Contrast</div>
                <div class="slider" id="contrast-value-out" data-value='1'></div>
                <div class="aside__number" id="contrast-value">1</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Hue-rotate</div>
                <div class="slider" id="hue-value-out" data-value='0'></div>
                <div class="aside__number" id="hue-value">0</div>
            </div>
            <div class="aside--item">
                <input type="button" id="reset" class="button" value="Reset!">
            </div>
        </aside>
        <article class="center">
            <div class="center--modal">
                <input type="button" value="Close" class="center--modal__close button">
                <input type="button" value="Copy" class="center--modal__copy button">
                <div id="code"></div>
            </div>
            <div class="center__img">
                <img src="assets/images/preview_img.jpg" alt="userImg" class="center__img--core filter" id="img">
            </div>
        </article>
    </main>

    <!-- End Footer -->
    <script src="temp/scripts/App.js"></script>
   
</body>
</html>