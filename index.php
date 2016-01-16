<?php 
$ASSET_PATH = $_SERVER['DOCUMENT_ROOT']."/assets/php";
$result = 0;
require($ASSET_PATH."/header.php");
?>
<!-- Enter Wrapper -->
<div id="main" class="page slideshow">
</div>
<div id="about" class="page">
	<h1>ABOUT</h1>
	<p>Each year, RIT Baja SAE competes in international competitions sponsored and organized by the Society of Automotive Engineers (SAE). The Baja SAE competition itself consists of three regional competitions within the United States, as well as an international competition. The cars are off-road vehicles that must be capable of surviving and excelling on a course consisting of rough terrain and jumps. During competition, teams are judged on a variety of factors including cost, design and decisions, and acceleration, suspension, manuverability performance, culminating in a four hour long endurance race.</p>
	<p>RIT Baja SAE is proud of its long tradition of excellence in the Baja SAE competition, having been an active member in almost every event since our first race in 1980. We pride ourselves on our professionalism and dedication, and we love what we do.</p>
	<p>If you would like to learn more about Baja SAE, you can visit the official <a href="https://www.bajasae.net/">Baja SAE website</a>.</p>
	<h2>MEETINGS</h2>
	<p>Tuesday 9pm and Saturday 10am<br>Room 1270 in Louise Slaughter Hall (Building 78)</p>
	<h2>CONTACT</h2>
	<p>Email: teammanager@ritbaja.com<br>Shop Phone: 585.475.5102 <br>Room 1270 in Louise Slaughter Hall (Building 78)</p>
</div>
<div id="team" class="page">
	<h1>Team</h1>
	<img src=" /assets/images/Rock_Crawl_2.jpg" alt="Imagine RIT">
	<ul class="buton">
		<li><a href="e_board.php">executive board</a></li>
		<li><a href="design_team.php">design team</a></li>
	</ul>
</div>
<div id="gallery" class="page">
	<h1>Gallery</h1>
	<ul class="thumbnail">
		<li><div class="layer"><span>2015</span></div></li>
		<li><div class="layer"><span>2014</span></div></li>
		<li><div class="layer"><span>2013</span></div></li>
		<li><div class="layer"><span>2012</span></div></li>
	</ul>
</div>
<div id="results" class="page"></div>
<div id="sponsors" class="page">
	<h1>Sponsors <br>& Donate</h1>
	<ul class="buton">
		<li><span id="sponsortoggle">Current Sponsors</span></li>
		<li id="sponsorpage"></li>
	</ul>
	<p>Click below to learn more about becoming a sponsor of our team.</p>
	<ul class="buton">
		<li><span>Brochure</span></li>
		<li><span>Proposal</span></li>
	</ul>
</div>
<!-- Exit Wrapper -->
<?php require($ASSET_PATH."/footer.php");?>