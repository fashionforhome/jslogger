<?php
/**
 * The log script, makes minimalistic Bootstrapping and Initializes our log class and logs...
 */
use F4H\Logger\Log;
use Monolog\Logger;

require_once __DIR__ . "/../vendor/autoload.php";

// validate message
$logMsg = isset($_POST['message']) ? $_POST['message'] : '';

// validate logType
try {
	$logType = Logger::getLevelName($_POST['logType']);
} catch (InvalidArgumentException $e) {
	$logType = Logger::getLevelName(Log::DEFAULT_LOG_LEVEL);
}

// create log and log
$log = new Log();
$log->log($logType, $logMsg);
