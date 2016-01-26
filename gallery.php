<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
$result = 0;
require($ASSET_PATH."/header.php");
?>

<div id="gallerypage" class="page">
	<h1>2015 gallery</h1>
	<div id="slideshow">
		<?php 
			$dirname = "gallery/2015/Maryland/";
			$images = glob($dirname."*.JPG");
			$numOfImages = 0;
			foreach($images as $image) {
				echo '<img src="'.$image.'" class="image"/><br />';
				$numOfImages++;
			}  
		?>
	</div>
</div>
    	<script type="text/javascript"> var numOfImages = "<?php echo $numOfImages; ?>";</script>

<?php require($ASSET_PATH."/footer.php");?>