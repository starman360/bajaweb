<?php
	//import_results.php
	/** Error reporting */
	error_reporting(E_ALL);

	/** Include path **/
	ini_set('include_path', $_SERVER['DOCUMENT_ROOT'].'/assets/');

	/** PHPExcel */
	include 'PHPExcel.php';

	/** PHPExcel_Writer_Excel2007 */
	include 'PHPExcel/Writer/Excel2007.php';

	function displayAwards($year, $race) {
		// Create new PHPExcel object
		// echo date('H:i:s') . " Create new PHPExcel object\n";
		$inputFileType = 'Excel5';
		$inputFileName = '../Results.xls';

		/**  Create a new Reader of the type defined in $inputFileType  **/
		$objReader = PHPExcel_IOFactory::createReader($inputFileType);
		/**  Advise the Reader that we only want to load cell data  **/
		$objReader->setReadDataOnly(true);
		/**  Load $inputFileName to a PHPExcel Object  **/
		$objPHPExcel = $objReader->load($inputFileName);
		$objWorksheet = $objPHPExcel->getActiveSheet();
		foreach ($objWorksheet->getRowIterator() as $rowNum => $row) {
			if ($objWorksheet->getCellByColumnAndRow(0, $rowNum)->getValue() == $year) {
				if ($objWorksheet->getCellByColumnAndRow(1, $rowNum)->getValue() == $race) {
					$cellIterator = $row->getCellIterator();
					$i = 0;
					foreach ($cellIterator as $cell) {
						if ($i >= 2) {
							$colIndex = PHPExcel_Cell::columnIndexFromString($cell->getColumn()) - 1;
							echo '<li class="award">'.$cell->getValue();
							switch ($cell->getValue()) {
								case 1:
									echo 'st: ';
									break;
								case 2:
									echo 'nd: ';
									break;
								case 3:
									echo 'rd: ';
									break;
								default:
									echo 'th: ';
									break;
							}
							echo $objWorksheet->getCellByColumnAndRow($colIndex, 1)->getValue().'</li>';
						}
						$i++;
					}
				}
			}
		}
	}

?>