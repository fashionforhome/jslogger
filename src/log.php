<?php
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
