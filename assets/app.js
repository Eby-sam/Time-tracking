var but = document.getElementById('but');
var hour = document.getElementById('hours');
var days = document.getElementById('days');
var containerTop = document.getElementById('containerTop');
var tmpl = document.getElementById('tmpl');
var tmpl2 = document.getElementById('tmpl2');
var divTitle = document.getElementsByClassName('divTitle');
var detailTache = document.getElementsByClassName('detailTache');
var news = document.getElementsByClassName('new');
var containTache = document.getElementsByClassName('containTache');
var addBut = document.getElementById('buttonAdd');
var containerCreat = document.getElementsByClassName('container');
var del = document.getElementById('del');
var resultId = 1;
var newId = 50;
var containerId = 100;
newId++;
containerId++;
// creation d'un projet ---------------------------------------------------------------
function creatProject() {
    for (var i = 0; i < 1; i++) {
        containerTop.append(tmpl.content.cloneNode(true));
    }
    // creation d'une tache ----------------------------------------------------------------
    if ('container' in document.createElement('template')) {
        function creatTache() {
            detailTache.append(tmpl2.containtTache.cloneNode(true));
        }
        addBut.addEventListener('click', creatTache);
    }
    else {
        // null
    }
    function removeProject() {
        containerCreat.remove();
        console.log(removeProject);
    }
    del.addEventListener('click', removeProject);
}
but.addEventListener('click', creatProject);
