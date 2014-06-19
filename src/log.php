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

// get LogFileName
$logFileName = $_POST['logfileName'];

// create logger and log
try {
	$log = new Log($logFileName);
	$log->log($logType, $logMsg, $additionalData);
	echo "success";

} catch (Exception $e) {
	// return errorMessage if one occures
	echo $e->getMessage();
}