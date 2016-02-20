<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
$result = 0;
require($ASSET_PATH."/header.php");
?>

<div id="gallerypage" class="page">
	<h1>2015 gallery</h1>
	<div id="slideshow">
		<?php 
			$dirname = $_GET["race"]."/";
			$images = glob($dirname."*.{jpg,JPG,png,gif}", GLOB_BRACE);
			$_SESSION['numOfImages'] = 0;
			foreach($images as $image) {
				echo '<img src="'.$image.'" class="image"/><br />';
				$_SESSION['numOfImages']++;
			}  
		?>
	</div>
</div>
<div class="back">
	<ul class="buton">
		<li><a href="#" onclick="history.back()">Back to 2015</a></li>
	</ul>
</div>
<?php require($ASSET_PATH."/footer.php");?>