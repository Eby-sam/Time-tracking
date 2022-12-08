var but = document.getElementById('but');
var hour = document.getElementById('hours');
var days = document.getElementById('days');
var containerTop = document.getElementById('containerTop');
var resultId = 1;
var newId = 50;
var containerId = 100;
resultId++;
newId++;
containerId++;
// creation d'un projet -------------------------------------
function creatProject() {
    containerTop.innerHTML += "<div class=\"container\">\n                        <div class=\"divTitle\" id=\"".concat(resultId, "\">\n                            <h2>Default Project</h2>\n                        </div>\n                        <div class=\"containerBlock\">\n                            <div class=\"time\">\n                                <div class=\"oclock\">\n                                    <i class=\"fa-regular fa-clock\"></i>\n                                    <p><span class=\"hours\">0</span> h</p>\n                                </div>\n                                <div class=\"dates\">\n                                    <i class=\"fa-solid fa-calendar-days\"></i>\n                                    <p>Il y a <span class=\"days\">0</span> jours</p>\n                                </div>\n                            </div>\n                            <div class=\"taches\">\n                                <div class=\"detailTache\" id=\"").concat(containerId, "\">\n                                \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"barre\">\n                            <div class=\"corbeil\">\n                                <i class=\"fa-solid fa-trash\"></i>\n                            </div>\n                            <div class=\"look\">\n                                <i class=\"fa-solid fa-eye\"></i>\n                            </div>\n                            <button class=\"new\" id=\"").concat(newId, "\">+ Ajouter une t\u00E2che</button>\n                        </div>\n                    </div>");
    // creation d'une tache -----------------------
    console.log("creat ok");
    if (document.getElementsByClassName("new") &&
        document.getElementsByClassName("detailTache")) {
        console.log("verif 2 class ok");
        var news = document.getElementById('newId');
        console.log(news);
        var containerTache_1 = document.getElementById("containerId");
        function creatTache() {
            containerTache_1.innerHTML += "<div class=\"containTache\">\n                            <div>\n                               hello world\n                            </div>\n                            <div></div>\n                         </div>";
        }
        if (news) {
            news.addEventListener('click', creatTache);
            console.log('verif news ok');
        }
    }
}
but.addEventListener('click', creatProject);
