<?php
// header.php
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
?>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RIT BAJA</title>
        <!--Bootstrap Stylesheet-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <!--CSS Stylesheet-->
        <link href="assets/css/style_sm.css" rel="stylesheet">
        <link href="assets/css/style_md.css" rel="stylesheet">
        <link href="assets/css/style_lg.css" rel="stylesheet">
        <link href="assets/css/slideshow.css" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper">
        <?php include($ASSET_PATH."/nav.php");?>