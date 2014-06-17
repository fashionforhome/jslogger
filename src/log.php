<?php
//TODO START - maybe move this header part
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

//	exit(0);
}
//TODO END - maybe move this header part

/**
 * The log script, makes minimalistic Bootstrapping and Initializes our log class and logs...
 */
use F4H\Logger\Log;
use Monolog\Logger;

require_once __DIR__ . "/../vendor/autoload.php";

// validate message
$logMsg = isset($_POST['message']) ? $_POST['message'] : '';

// prepare additionalData
$additionalData = array();
if (isset($_POST['clientData'])) {
	$additionalData['clientData'] = $_POST['clientData'];
}

// validate logType
try {
	$logType = Logger::getLevelName($_POST['logType']);
} catch (InvalidArgumentException $e) {
	$logType = Logger::getLevelName(Log::DEFAULT_LOG_LEVEL);
}

// create logger and log
$log = new Log();
$log->log($logType, $logMsg, $additionalData);
