// recuperation des classes et des ID html --------------------------------------------
let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLElement;
let tmpl2 = document.getElementById('tmpl2') as HTMLElement;
let divTitle = document.getElementsByClassName('divTitle') as HTMLCollection;
let containTache = document.getElementsByClassName('containTache') as HTMLCollection;
let addBut = document.getElementsByClassName('new') as HTMLCollection;
let del = document.getElementById('del') as HTMLElement;


// creation d'un projet ---------------------------------------------------------------
function creatProject(this: any) {
    if (tmpl.content as HTMLCollection) {
        containerTop.append(tmpl.content.cloneNode(true));
        let currentProjet: number = 1;
        let projects = document.querySelectorAll('.container');
        projects.forEach((projet) => {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });

        let currentButton: number = 1;
        let buttonAddT = document.querySelectorAll('.new');
        buttonAddT.forEach((button) => {
            button.id = 'buttonProject' + currentButton.toString();
            currentButton++;
        });

        let currenttache: number = 1;
        let currentTacheA = document.querySelectorAll('.taches');
        currentTacheA.forEach((dtl) => {
            dtl.id = 'tachesList' + currenttache.toString();
            currenttache++;


            // creation d'une tache ---------------------------------------------------------
            function creatTache() {
                if (currentTacheA) {
                    let detailCurrent = 0;
                    let detailListe = document.createElement('div');
                    detailListe.className = 'containTache';
                    detailListe.innerText = "hello";
                    document.querySelectorAll('.taches').append(detailListe);

                }
            }
            for (let i = 0; i < 1; i++) {
                if (currentTacheA) {
                    buttonAddT[i].addEventListener('click', creatTache);
                }
            }
        });
    }
}

but.addEventListener('click', creatProject);





