<?php

namespace Eby\project;
require_once '../vendor/autoload.php';

use RedBeanPHP\R;

R::setup('mysql:host=localhost;dbname=timetracking', 'root','');


$project = R::load('project', 2);

echo gettype($project->title);


