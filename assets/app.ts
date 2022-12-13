let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLElement;
let tmpl2 = document.getElementById('tmpl2') as HTMLElement;
let divTitle = document.getElementsByClassName('divTitle') as HTMLCollection;
let detailTache = document.getElementsByClassName('detailTache') as HTMLCollection;
let news = document.getElementsByClassName('new') as  HTMLCollection;
let containTache = document.getElementsByClassName('containTache') as HTMLCollection;
let addBut = document.getElementById('buttonAdd') as HTMLElement;
let containerCreat = document.getElementsByClassName('container') as HTMLCollection;
let del = document.getElementById('del') as HTMLElement;

let resultId = 1;
let newId = 50;
let containerId = 100;

newId++;
containerId++;

// creation d'un projet ---------------------------------------------------------------
function creatProject() {
    for (let i = 0; i < 1; i++) {
        containerTop.append(tmpl.content.cloneNode(true));

    }

// creation d'une tache ----------------------------------------------------------------
    if('container' in document.createElement('template') ) {
        function creatTache() {

            detailTache.append(tmpl2.containtTache.cloneNode(true));
        }

        addBut.addEventListener('click',creatTache);

    }
    else {
        // null
    }

    function removeProject () {
        containerCreat.remove();
        console.log(removeProject);
    }
    del.addEventListener('click', removeProject);


}

but.addEventListener('click', creatProject);




