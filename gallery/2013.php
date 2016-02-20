<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
require($ASSET_PATH."/header.php");
$year = 2013;
$race = array("Tennessee", "Rochester");
?>

<h1></h1>
<h1></h1>
<h1><?php echo $year ?> GALLERY</h1>

<div id="albums" class="page">
	<ul id="gal">
		<?php 
			$numOfRaces = sizeof($race);
			for ($i=0; $i < $numOfRaces; $i++) {
				echo '<ul class="album">
					<li class="albumcover"><a href="/gallery/'.$year.'/gallery.php?race='.$race[$i].'"><img src="/gallery/'.$year.'/'.$race[$i].'_thumb.jpg" alt=""></a></li>
					<li class="albumtitle">'.$race[$i].'</li>
				</ul>';
			}
		?>
	</ul>
</div>
<div class="page">
	<h1></h1>
	<ul class="buton">
		<li><a href="/">Back to Gallary</a></li>
	</ul>
</div>

<?php require($ASSET_PATH."/footer.php");?>
