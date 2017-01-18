<?php

require_once '../db_common.php';

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

if (PHP_SAPI == 'cli')
	die('This example should only be run from a Web Browser');

/** Include PHPExcel */
require_once dirname(__FILE__) . '/../Classes/PHPExcel.php';


// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

// Set document properties
$objPHPExcel->getProperties()->setCreator("University of Portsmouth")
							 ->setLastModifiedBy("University of Portsmouth")
							 ->setTitle("Open Day Feedback Data")
							 ->setSubject("Open Day Feedback Data")
							 ->setDescription("Feedback data document from the open day visitor app, along with generated charts")
							 ->setKeywords("university portsmouth data analytics feedback")
							 ->setCategory("Open Day Feedback Data");


?>
