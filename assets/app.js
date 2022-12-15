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
var addBut = document.getElementsByClassName('new');
var containerCreat = document.getElementsByClassName('container');
var del = document.getElementById('del');
var container = document.getElementsByClassName('container');
var resultId = 1;
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
        var currentButton_1 = 500;
        var buttonAddT = document.querySelectorAll('.new');
        buttonAddT.forEach(function (button) {
            button.id = 'buttonProject' + currentButton_1.toString();
            currentButton_1++;
        });
        // creation d'une tache ---------------------------------------------------------
        function creatTache() {
            var z = 0;
            console.log("hello" + z++);
            if (detailTache) {
                var detailCurrent_1 = 0;
                var detailId = document.querySelectorAll('.detailTache');
                detailId.forEach(function (detailId) {
                    detailId.id = 'detailId' + detailCurrent_1.toString();
                    detailCurrent_1++;
                    console.log("2");
                    console.log(detailId.id + '' + tmpl2);
                });
            }
        }
        for (var i = 0; i < 50; i++) {
            if (buttonAddT[i]) {
                buttonAddT[i].addEventListener('click', creatTache);
            }
        }
    }
}
but.addEventListener('click', creatProject);
