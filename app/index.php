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

    <!-- Icons -->
    <!-- <link href="https://file.myfontastic.com/EtCKMx3SaBPvvQXwT9ZfxY/icons.css" rel="stylesheet"> -->
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i" rel="stylesheet">
    
    <!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	
</head>
<body>
    
    <!-- Header Start -->
    
    <!-- Header End -->

    <main class="main-wrapper">
        <aside class="aside" data-simplebar>
            <div class="aside--modal"></div>
            <h1 class="aside__main-title">Css &lt;img&gt; Editor</h1>
            <div class="aside--item">
                <div class="aside--item--wrapper-file">
                    <span class="aside--item--wrapper-file--title icon-picture-streamline">Upload your image!</span>
                    <input type="file" class="aside--item--wrapper-file--core" id="uFile">
                </div>
                <button type="button" id="cssgene" class="button icon-code">Generate Css!</button>
            </div>
            <div class="aside--item">
                <div class="aside__title">Sepia</div>
                <input type="range" class="slider filters" value="0" max="100">
                <div class="aside__number" id="sepia-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Blur</div>
                <input type="range" class="slider filters" value="0" max="10" step="0.01">
                <div class="aside__number" id="blur-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Brightness</div>
               <input type="range" class="slider filters" value="1" min="0" max="3" step="0.01">
                <div class="aside__number" id="bright-value">1</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Grayscale</div>
               <input type="range" class="slider filters" value="0" min="0" max="100">
                <div class="aside__number" id="gray-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Contrast</div>
               <input type="range" class="slider filters" value="1" min="0" max="3" step="0.01">
                <div class="aside__number" id="contrast-value">1</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Hue-rotate</div>
               <input type="range" class="slider filters" value="0" min="0" max="360">
                <div class="aside__number" id="hue-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Invert</div>
               <input type="range" class="slider filters" value="0" min="0" max="1" step="0.01">
                <div class="aside__number" id="invert-value">0</div>
            </div>
            <div class="aside--item">
                <div class="aside__title">Saturate</div>
               <input type="range" class="slider filters" value="1" min="0" max="10" step="0.01">
                <div class="aside__number" id="saturate-value">1</div>
            </div>
            <div class="blend-wrapper">
                <div class="aside--item blend-wrapper--less-pb">
                    Blend Modes                    
                    <label class="check">
                        <input type="checkbox" id="blend-wrapper__check"/>
                        <div class="box"></div>
                    </label>
                </div>
                <div class="aside--item blend-wrapper__options">
                    <span>Select color</span>
                    <input type="color" class="input-color" value="#ff2200">
                    <span>Mix Blend</span>
                    <select class="blend-wrapper__select">
                        <option value="normal">normal</option>
                        <option value="multiply">multiply</option>
                        <option value="screen" selected="selected">screen</option>
                        <option value="overlay">overlay</option>
                        <option value="darken">darken</option>
                        <option value="lighten">lighten</option>
                        <option value="color-dodge">color-dodge</option>
                        <option value="color-burn">color-burn</option>
                        <option value="hard-light">hard-light</option>
                        <option value="soft-light">soft-light</option>
                        <option value="difference">difference</option>
                        <option value="exclusion">exclusion</option>
                        <option value="hue">hue</option>
                        <option value="saturation">saturation</option>
                        <option value="color">color</option>
                        <option value="luminosity">luminosity</option>
                    </select>
                </div>
            </div>
            <div class="aside--item">
                </span><button type="button" id="reset" class="button icon-streamline-sync" value="Reset!">Reset!</button>
            </div>
        </aside>
        <article class="center">
            <div class="center--modal">
                <div class="center--modal__wrapper-btn">
                    <input type="button" value="Copy" data-clipboard-action="copy" data-clipboard-target="#code" class="center--modal__copy button button--wa">
                    <input type="button" value="Close" class="center--modal__close button button--wa">
                </div>
                <div class="center--modal__init-code">/* Css */</div>
                <span id="code">
                    <div class="center--modal__code" ></div>
                    <div class="center--modal__blend"></div>
                </span>
                <div class="center--modal__init-code">&lt;!-- Markup --&gt;</div>
                <div class="center--modal__code--markup">&lt;figure class='filter'&gt;<br><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src='...'&gt;</span><br>&lt;/figure&gt;</div>
                
            </div>
            <div class="center__img">
                <div class="center__img--wrapper filter">
                    <figure>
                        <div class="center__img--wrapper--blend"></div>
                        <img src="assets/images/preview_img.jpg" alt="userImg" class="center__img--core" id="img">     
                    </figure>
                </div>
            </div>
        </article>
    </main>

    <!-- Scripts -->
    <script src="temp/scripts/App.js"></script>
   
</body>
</html>