const botaoTema = document.getElementById("toggle-tema");
const body = document.body;

botaoTema.addEventListener("click", function () {
    if (body.classList.contains("tema-claro")) {
        body.classList.remove("tema-claro");
        body.classList.add("tema-escuro");
    } else {
        body.classList.remove("tema-escuro");
        body.classList.add("tema-claro");
    }
});