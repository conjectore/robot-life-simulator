
function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nome}=${valor}; expires=${data.toUTCString()}; path=/`;
}

function getCookie(nome) {
    const nomeEQ = nome + "=";
    const partes = document.cookie.split(';');
    for (let parte of partes) {
        parte = parte.trim();
        if (parte.indexOf(nomeEQ) === 0) {
            return parte.substring(nomeEQ.length);
        }
    }
    return null;
}



document.addEventListener("DOMContentLoaded", function() {

    const nomeSalvo = getCookie("nomeJogador");
    const emailSalvo = getCookie("emailJogador");
    const novidadesSalvas = getCookie("novidadesPreferidas");

    
    if (nomeSalvo) document.getElementById("nome").value = nomeSalvo;
    if (emailSalvo) document.getElementById("email").value = emailSalvo;

    
    const novidadesCheckbox = document.getElementById("novidades");

    if (novidadesSalvas && novidadesSalvas.length > 0) {
        novidadesCheckbox.checked = true;
        exibirOpcoesNovidades();

        
        const categorias = novidadesSalvas.split(",");

        categorias.forEach(cat => {
            const checkbox = document.querySelector(`input[name="novidades[]"][value="${cat}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }

   
    if (novidadesCheckbox) {
        novidadesCheckbox.addEventListener("change", function () {
            const area = document.getElementById("categoriasNovidades");
        
            if (this.checked) {
                exibirOpcoesNovidades();

                // Se já existirem cookies salvos, reativar
                if (novidadesSalvas) {
                    const categorias = novidadesSalvas.split(",");
                    categorias.forEach(cat => {
                        const checkbox = document.querySelector(`input[name="novidades[]"][value="${cat}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                }
            } else {
                area.style.display = "none";
                area.innerHTML = "";
            }
        });
    }
});



document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value.trim();

    const termos = document.getElementById("termos").checked;
    const querNovidades = document.getElementById("novidades").checked;

    const erro = document.getElementById("erro");
    const sucesso = document.getElementById("sucesso");

    erro.innerText = "";
    sucesso.innerText = "";

    if (nome.length < 3) {
        erro.innerText = "O nome deve ter pelo menos 3 caracteres.";
        return;
    }

    if (parseInt(idade) < 10) { 
        erro.innerText = "A idade mínima é 10 anos.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        erro.innerText = "Por favor, insira um email válido.";
        return;
    }

    if (!termos) {
        erro.innerText = "Você deve aceitar os termos de uso.";
        return;
    }

    
    setCookie("nomeJogador", nome, 7);
    setCookie("emailJogador", email, 7);
    setCookie("idadeJogador", idade, 7);


    
    if (querNovidades) {
        const opcoesSelecionadas = Array.from(document.querySelectorAll("input[name='novidades[]']:checked")).map(c => c.value);
        setCookie("novidadesPreferidas", opcoesSelecionadas.join(','), 7);
    } else {
        setCookie("novidadesPreferidas", "", 7);
    }


    sucesso.innerText = "✅ Cadastro realizado com sucesso! Redirecionando...";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});