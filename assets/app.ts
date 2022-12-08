let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let resultId = 1;
let newId = 50;
let containerId = 100;

resultId++;
newId++;
containerId++;

// creation d'un projet -------------------------------------
function creatProject() {
    containerTop.innerHTML += `<div class="container">
                        <div class="divTitle" id="${resultId}">
                            <h2>Default Project</h2>
                        </div>
                        <div class="containerBlock">
                            <div class="time">
                                <div class="oclock">
                                    <i class="fa-regular fa-clock"></i>
                                    <p><span class="hours">0</span> h</p>
                                </div>
                                <div class="dates">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <p>Il y a <span class="days">0</span> jours</p>
                                </div>
                            </div>
                            <div class="taches">
                                <div class="detailTache" id="${containerId}">
                                
                                </div>
                            </div>
                        </div>
                        <div class="barre">
                            <div class="corbeil">
                                <i class="fa-solid fa-trash"></i>
                            </div>
                            <div class="look">
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <button class="new" id="${newId}">+ Ajouter une tâche</button>
                        </div>
                    </div>`;


    // creation d'une tache -----------------------

    console.log("creat ok");

    if(document.getElementsByClassName("new") &&
        document.getElementsByClassName("detailTache")) {

        console.log("verif 2 class ok");
        let news = document.getElementById('newId') as HTMLElement;
        console.log(news as HTMLElement);
        let containerTache = document.getElementById("containerId") as HTMLElement;
        function creatTache() {

            containerTache.innerHTML += `<div class="containTache">
                            <div>
                               hello world
                            </div>
                            <div></div>
                         </div>`
        }

        if(news) {
            news.addEventListener('click', creatTache);
            console.log('verif news ok');
        }
    }

}

but.addEventListener('click', creatProject);




