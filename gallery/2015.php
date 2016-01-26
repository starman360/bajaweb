<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
require($ASSET_PATH."/header.php");
?>

<h1></h1>
<h1></h1>
<h1>2015 GALLERY</h1>

<div id="albums" class="page">
	<ul id="gal">
		<ul class="album">
			<li class="albumcover"></li>
			<li class="albumtitle">Build season</li>
		</ul>
		<ul class="album">
			<li class="albumcover"></li>
			<li class="albumtitle">Auburn race</li>
		</ul>
		<ul class="album">
			<li class="albumcover"></li>
			<li class="albumtitle">maryland race</li>
		</ul>
		<ul class="album">
			<li class="albumcover"></li>
			<li class="albumtitle">oregon race</li>
		</ul>
	</ul>
</div>
<div class="page">
	<h1></h1>
	<ul class="buton">
		<li><span>back</span></li>
	</ul>
</div>

<?php require($ASSET_PATH."/footer.php");?>
