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
        <aside class="main-wrapper__aside">
            <div class="main-wrapper__aside--item">
                <div class="main-wrapper__aside--item--wrapper-file">
                    <span class="main-wrapper__aside--item--wrapper-file--title">Upload your image!</span>
                    <input type="file" class="main-wrapper__aside--item--wrapper-file--core" id="uFile">
                </div>
            </div>
            <div class="main-wrapper__aside--item">
                <input type="button" class="button" value="Generate Css!">
            </div>
            <div class="main-wrapper__aside--item" id="border">
                <div class="main-wrapper__title">Border-radius</div>
                <input type="range" class="slider" value="0" max="100">
                <div class="main-wrapper__number">0</div>
            </div>
            <div class="main-wrapper__aside--item" id="sepia">
                <div class="main-wrapper__title">Sepia</div>
                <input type="range" class="slider filters" value="0" max="100">
                <div class="main-wrapper__number">0</div>
            </div>
            <div class="main-wrapper__aside--item" id="blur">
                <div class="main-wrapper__title">Blur</div>
                <input type="range" class="slider filters" value="0" max="10">
                <div class="main-wrapper__number">0</div>
            </div>
            <div class="main-wrapper__aside--item" id="bright">
                <div class="main-wrapper__title">Brightness</div>
                <input type="range" class="slider filters" value="100" max="100">
                <div class="main-wrapper__number">0</div>
            </div>
        </aside>

        <article class="main-wrapper__center">
            <div class="main-wrapper__center__img">
                <img src="assets/images/preview_img.jpg" alt="userImg" class="main-wrapper__center__img--core" id="img">
            </div>
        </article>
    </main>

    <!-- <div class="box-wrapper">
        <div class="box"><p class="parrafo"></p></div>
    </div>

    <input type="text" class="texto">
    <input type="submit" class="button" value="enviar">

    <div class="contador">0</div>
    <div class="modifi"></div>
    <img src="assets/images/dog.jpg" class="modifi" alt="">
    <input type="range" min="-100" max="100" value="0" class="slider" id="myRange">
    <input type="color" value="#ff0000" class="color">
    <input type="range" value="0" max="50" class="blur">

    <div class="props"></div>
    <input type="submit" class="propbutton" value="mostrar css">
     -->
    <!-- End Footer -->
    <script src="temp/scripts/App.js"></script>
   
</body>
</html>