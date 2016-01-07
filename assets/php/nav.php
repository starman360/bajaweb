<?php
// nav.php
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
?>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="navbar-header">
	    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        	<span class="sr-only">Toggle navigation</span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
    	</button>
        <a href="#"><img id="logo" src="assets/images/Baja_logo.png" alt="Baja"></a>
  	</div>

  	<!-- Collect the nav links, forms, and other content for toggling -->
  	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    	<ul class="nav navbar-nav text-center">
      		<li><a href="#about">ABOUT</a></li>
        	<li><a href="#team">TEAM</a></li>
       		<li><a href="#gallery">GALLERY</a></li>
       		<li><a href="#results">RESULTS</a></li>
       		<li><a href="#sponsors">SPONSORS & DONATE</a></li> 
    	</ul>
  	</div><!-- /.navbar-collapse -->
</nav>