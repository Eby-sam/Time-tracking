var but = document.getElementById('but');
var hour = document.getElementById('hours');
var days = document.getElementById('days');
var containerTop = document.getElementById('containerTop');
var tmpl = document.getElementById('tmpl');
var tmpl2 = document.getElementById('tmpl2');
var divTitle = document.getElementsByClassName('divTitle');
var detailTache = document.getElementsByClassName('detailTache');
var containTache = document.getElementsByClassName('containTache');
var addBut = document.getElementsByClassName('new');
var del = document.getElementById('del');
var container = document.getElementsByClassName('container');
// creation d'un projet ---------------------------------------------------------------
function creatProject() {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true));
        var currentProjet_1 = 1;
        var projects = document.querySelectorAll('.container');
        projects.forEach(function (projet) {
            projet.id = 'container' + currentProjet_1.toString();
            currentProjet_1++;
        });
        var currentButton_1 = 1;
        var buttonAddT_1 = document.querySelectorAll('.new');
        buttonAddT_1.forEach(function (button) {
            button.id = 'buttonProject' + currentButton_1.toString();
            currentButton_1++;
        });
        var currenttache_1 = 1;
        var currentTacheA_1 = document.querySelectorAll('.taches');
        currentTacheA_1.forEach(function (dtl) {
            dtl.id = 'tachesList' + currenttache_1.toString();
            currenttache_1++;
            // creation d'une tache ---------------------------------------------------------
            function creatTache() {
                if (currentTacheA_1) {
                    var detailCurrent = 0;
                    var detailListe = document.createElement('div');
                    detailListe.className = 'containTache';
                    detailListe.innerText = "hello";
                    document.querySelectorAll('.taches').append(detailListe);
                }
            }
            for (var i = 0; i < 50; i++) {
                if (currentTacheA_1) {
                    buttonAddT_1[i].addEventListener('click', creatTache);
                }
            }
        });
    }
}
but.addEventListener('click', creatProject);
