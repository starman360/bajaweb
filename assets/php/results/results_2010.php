<?php
	//results_2010.php
	$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
	include($ASSET_PATH."/results/import_results.php");
	$year = 2010;
	$race = array("Carolina", "Rochester", "Washington");
?>

<h1 id="thin"></h1>
<ul class="buton">
	<li class="MENU"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span><span>2015 Season</span></li>
</ul>
<div class="page">
	<ul class="season container">	
		<?php 
			$numOfRaces = sizeof($race);
			for ($i=0; $i < $numOfRaces; $i++) {
				echo '<ul class="race col-md-'.intval(12 / $numOfRaces).'">
					<li class="racetitle">'.$race[$i].'</li>';
					displayAwards($year, $race[$i]);
				echo '</ul>';
			}
		?>
	</ul>
</div>