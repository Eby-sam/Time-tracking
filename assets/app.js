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
var container = document.getElementsByClassName('container');
var resultId = 1;
// creation d'un projet ---------------------------------------------------------------
function creatProject() {
    for (var i = 0; i < 1; i++) {
        container.id = resultId++;
        containerTop.append(tmpl.content.cloneNode(true));
    }
    // creation d'une tache ----------------------------------------------------------------
    function creatTache() {
        for (var i = 0; i < 1; i++) {
            console.log(creatTache);
            detailTache.append(tmpl2.content.cloneNode(true));
        }
    }
    addBut.addEventListener('click', creatTache);
}
but.addEventListener('click', creatProject);
