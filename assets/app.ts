let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLElement;
let tmpl2 = document.getElementById('tmpl2') as HTMLElement;
let divTitle = document.getElementsByClassName('divTitle') as HTMLCollection;
let detailTache = document.getElementsByClassName('detailTache') as HTMLCollection;
let news = document.getElementsByClassName('new') as HTMLCollection;
let containTache = document.getElementsByClassName('containTache') as HTMLCollection;
let addBut = document.getElementsByClassName('new') as HTMLCollection;
let containerCreat = document.getElementsByClassName('container') as HTMLCollection;
let del = document.getElementById('del') as HTMLElement;
let container = document.getElementsByClassName('container') as HTMLCollection;
let resultId = 1;


// creation d'un projet ---------------------------------------------------------------
function creatProject(this: any, ) {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true))
        let currentProjet: number = 1;
        let projects = document.querySelectorAll('.container');
        projects.forEach((projet) => {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });

        let currentButton: number = 500;
        let buttonAddT = document.querySelectorAll('.new');
        buttonAddT.forEach((button) => {
            button.id = 'buttonProject' + currentButton.toString();
            currentButton++;
        })

        // creation d'une tache ---------------------------------------------------------
        function creatTache() {
            let z = 0;
            console.log("hello" + z++);
            if (detailTache) {
                let detailCurrent = 0;
                let detailId = document.querySelectorAll('.detailTache');
                detailId.forEach((detailId) => {
                    detailId.id = 'detailId' + detailCurrent.toString();
                    detailCurrent++;
                    console.log("2");
                    console.log(detailId.id + '' + tmpl2);
                })
            }

        }
        for (let i = 0; i < 50; i++) {
            if (buttonAddT[i]) {
                buttonAddT[i].addEventListener('click', creatTache);
            }
        }
    }
}

but.addEventListener('click', creatProject);




