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
});const usuarios = [
    {
        email: "contador@teste.com",
        senha: "123",
        tipo: "contador"
    },
    {
        email: "cliente@teste.com",
        senha: "123",
        tipo: "cliente"
    }
];

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.email === emailDigitado && usuario.senha === senhaDigitada;
    });

    if (usuarioEncontrado) {
        if (usuarioEncontrado.tipo === "contador") {
            window.location.href = "pages/dashboardContador.html";
        } else if (usuarioEncontrado.tipo === "cliente") {
            window.location.href = "pages/dashboardCliente.html";
        }
    } else {
        alert("E-mail ou senha inválidos.");
    }
});