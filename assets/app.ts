let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let resultId = 1;
resultId++;

function creatProject() {
    containerTop.innerHTML += `<div class="container">
                        <div id="${resultId}">
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
                                <div class="detailTache">
                                
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
                            <div class="new">+ Ajouter une tâche</div>
                        </div>
                    </div>`;
}

but.addEventListener('click', creatProject);