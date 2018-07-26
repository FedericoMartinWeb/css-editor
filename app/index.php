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
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700" rel="stylesheet">
    
    <!-- Icons -->
    <link href="https://file.myfontastic.com/Fe6YFffCEVhcvQVzVyqwRm/icons.css" rel="stylesheet">
    
    <!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

    <style>
        input{
            cursor: pointer;
            margin-top: 50px;
        }

        p{
            margin: 0;
            padding: 0;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: Arial;
        }

        .box{
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .box-wrapper{
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            flex-wrap: wrap;
        }

        .box{
            width: 150px;
            height: 150px;
            background-color: green;
            margin-top: 50px;
            margin-left: 25px;
        }

        @media only screen and (min-width: 768px){
            .box:first-child{
                margin-left: 0;
            }
        }

        .green{
            background-color: green;
        }

        .contador{
            margin-top: 50px;
            width: 200px;
            height: 200px;
            background-color: blue;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 45px;
            font-family: arial;
        }

        .modifi{
            width: 100px;
            height: 100px;
            background-color: green;
            margin-top: 50px;
        }

        .slider{
            position: fixed;
            bottom: 50px;
            right: 50px;
        }

        .blur{
            position: fixed;
            bottom: 50px;
            left: 50px;
        }

        .props{
            position: fixed;
            top: 0;
            right: 0;
            height: 200px;
            width: 500px;
            background-color: red;
            color: #000;
        }

    </style>
	
</head>
<body>
    
    <div class="box-wrapper">
        <div class="box"><p class="parrafo"></p></div>
    </div>

    <input type="text" class="texto">
    <input type="submit" class="button" value="enviar">

    <div class="contador">0</div>
    <div class="modifi"></div>
    <input type="range" min="-100" max="100" value="0" class="slider" id="myRange">
    <input type="color" value="#ff0000" class="color">
    <input type="range" value="0" max="50" class="blur">

    <div class="props"></div>
    <input type="submit" class="propbutton" value="mostrar css">
    
    <!-- End Footer -->
     <script src="temp/scripts/App.js"></script>
   
</body>
</html>