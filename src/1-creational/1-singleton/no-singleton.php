<?php
class Logger {
  public $entries = array();
  public function __construct() {}
  public function log($message) {
    array_push($this->entries, $message);
    echo $message;
  }
}