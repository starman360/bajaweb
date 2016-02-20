<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
$result = 0;
require($ASSET_PATH."/header.php");
?>
<div id="eboard" class="page">
	<h1>Executive Board</h1>
</div>
<div id="description" class="page">
	<p>The Executive Board, elected democratically by the members of the team, oversees all administrative and design decisions made by RIT Baja SAE. Typically comprised of veteran members of the team, the four members of the Executive Board set the tone for the year, and ensure that the team as a whole functions smoothly. The Executive Board consists of a Team Manager, Project Manager, Treasurer, and Secretary.</p>
</div>
<div id="people" class="page">
	<ul id="teammembers">
		<ul class="member">
			<li class="portrait"><img src="/assets/images/headshots/headshot_doug.jpg" alt=""></li>
			<li class="specific">Team Manager</li>
			<li class="Name">Douglas Botto</li>
		</ul>				
		<ul class="member">
			<li class="portrait"><img src="/assets/images/headshots/headshot_palmiter.jpg" alt=""></li>
			<li class="specific">Project Manager</li>
			<li class="Name">Daniel Palmiter</li>
		</ul>
		<ul class="member">
			<li class="portrait"><img src="/assets/images/headshots/headshot_taylor.jpg" alt=""></li>
			<li class="specific">Secretary</li>
			<li class="Name">Taylor Clow</li>
		</ul>	
		<ul class="member">
			<li class="portrait"><img src="/assets/images/headshots/headshot_ellory.jpg" alt=""></li>
			<li class="specific">Treasurer</li>
			<li class="Name">Ellory Lane</li>
		</ul>
	</ul>
</div>
<div class="page">
	<h1></h1>
	<ul class="buton">
		<li><a href="/">Back</a></li>
	</ul>
</div>
<?php require($ASSET_PATH."/footer.php");?>