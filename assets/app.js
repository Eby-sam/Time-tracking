var but = document.getElementById('but');
var hour = document.getElementById('hours');
var days = document.getElementById('days');
var containerTop = document.getElementById('containerTop');
var resultId = 1;
resultId++;
function creatProject() {
    containerTop.innerHTML += "<div class=\"container\">\n                        <div id=\"".concat(resultId, "\">\n                            <h2>Default Project</h2>\n                        </div>\n                        <div class=\"containerBlock\">\n                            <div class=\"time\">\n                                <div class=\"oclock\">\n                                    <i class=\"fa-regular fa-clock\"></i>\n                                    <p><span class=\"hours\">0</span> h</p>\n                                </div>\n                                <div class=\"dates\">\n                                    <i class=\"fa-solid fa-calendar-days\"></i>\n                                    <p>Il y a <span class=\"days\">0</span> jours</p>\n                                </div>\n                            </div>\n                            <div class=\"taches\">\n                                <div class=\"detailTache\">\n                                \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"barre\">\n                            <div class=\"corbeil\">\n                                <i class=\"fa-solid fa-trash\"></i>\n                            </div>\n                            <div class=\"look\">\n                                <i class=\"fa-solid fa-eye\"></i>\n                            </div>\n                            <div class=\"new\">+ Ajouter une t\u00E2che</div>\n                        </div>\n                    </div>");
}
but.addEventListener('click', creatProject);
