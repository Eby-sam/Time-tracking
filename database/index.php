<?php

require_once '../vendor/autoload.php';

use RedBeanPHP\R;

R::setup('mysql:host=localhost;dbname=timetracking', 'root','');


$project = R::load('project',1);

echo "titre =>" . $project->title . "<br>";
echo "nombre de taches =>" . $project->tachenumbre . "<br>";
echo "description de tache =>" . $project->descrip . "<br>" . "<br>";


$project = R::load('project',2);

echo "titre =>" . $project->title . "<br>";
echo "nombre de taches =>" . $project->tachenumbre . "<br>";
echo "description de tache =>" . $project->descrip . "<br>";
