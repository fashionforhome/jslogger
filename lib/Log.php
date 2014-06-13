<?php

namespace F4H\Logger;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

/**
 * Class Log
 * Handles the Monolog logger stuff
 *
 * @package F4H\Logger
 */
class Log
{
	/**
	 * @var string
	 */
	const LOGGER_NAME = 'jsLogger';

	/**
	 * @var string
	 */
	const PATH_TO_LOG = '/var/log/js.log';

	/**
	 * The default loglevel we want to use if none is provided
	 *
	 * @var integer
	 */
	const DEFAULT_LOG_LEVEL = 200;

	/**
	 * @var \Monolog\Logger
	 */
	private $logger;

	/**
	 * constructor
	 */
	public function __construct()
	{
		$this->logger = new Logger(self::LOGGER_NAME);

		// register Handlers
		$this->logger->pushHandler(new StreamHandler(self::PATH_TO_LOG, Logger::WARNING));
	}

	/**
	 * Delegates a log info to the logger
	 *
	 * @param $logType
	 * @param $logMsg
	 * @param $additionalData
	 *
	 * @return bool
	 */
	public function log($logType, $logMsg, $additionalData)
	{
		$methodName = 'add' . ucfirst(strtolower($logType));

		if (method_exists($this->logger, $methodName)) {
			$this->logger->$methodName($logMsg, $additionalData);

			return true;
		}

		return false;
	}
}
