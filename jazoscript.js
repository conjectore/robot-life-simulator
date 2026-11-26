let moneysPorClick = 1;
let dinheirinhos = 0;


window.addEventListener("load", function(){
        let dinheiroString = sessionStorage.getItem("dinheirinhosGuardados");
        let dinheiro = parseInt(dinheiroString, 10);
    if(dinheiro >= 0){
        dinheirinhos = dinheirinhos + dinheiro;
        document.getElementById("money").innerHTML = dinheiro;
    } else{
        dinheirinhos = 0;
        document.getElementById("money").innerHTML = dinheirinhos;
    }


        let mpcString = sessionStorage.getItem("mpcGuardados");
        let mpc = parseInt(mpcString, 10);
    if(mpc >= 1){
        moneysPorClick = mpc;
    } else{
        moneysPorClick = 1;
    }
    
    checarUpgrades();
    checarTarefas();

  
    const nome = Cookie("nomeJogador");
    if (nome) {
        document.getElementById("evento").innerText = "🤖 Bem-vindo de volta, " + nome + "!";
    }
});



const imagens = ["assets/gear3.3.png", "assets/gear1.3.png", "assets/gear2.3.png"];
	  let engrenagem = 0;

        function clickNaEngrenagem(){
            engrenagem++;

	    if (engrenagem >= imagens.length) {
	    	engrenagem = 0;
	    }
	    document.getElementById("gear").src = imagens[engrenagem];

        dinheirinhos = dinheirinhos + moneysPorClick;

        sessionStorage.setItem("dinheirinhosGuardados", dinheirinhos.toString());


        document.getElementById("money").innerHTML = dinheirinhos;

        //Isso só era para cumprir os requisitos da atividade
        /*
        if (Math.random() < 0.10) {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => {
                
                const textoIngles = data.slip.advice;

                fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoIngles)}&langpair=en|pt`)
    .then(res => res.json())
    .then(dataTrad => {
        const pt = dataTrad.responseData.translatedText;

        document.getElementById("evento").innerText =
            "🎉 Conselho traduzido: " + pt;
            });
        });
    }*/

        checarUpgrades();
        
        }





        function checarUpgrades(){
            document.getElementById("upgradeUm").disabled = false;
            document.getElementById("upgradeDois").disabled = false;
            document.getElementById("upgradeTres").disabled = false;
            document.getElementById("upgradeQuatro").disabled = false;
            document.getElementById("upgradeCinco").disabled = false;

            if (document.getElementById("money").innerHTML >= 0){
            document.getElementById("upgradeUm").innerHTML = '<div class="iconeUpgrade">$100</div><div class="internoUpgrade">Comprar kit de mãos avançadas</div>';
            document.getElementById("upgradeUm").className = "upgrade";
        }if(moneysPorClick >= 2){
            document.getElementById("upgradeUm").innerHTML = '<div class="iconeUpgrade">$100</div><div class="internoUpgrade">Comprar kit de mãos avançadas</div>';
            document.getElementById("upgradeUm").className = "upgrade";
            document.getElementById("upgradeUm").disabled = true;
            document.getElementById("robo").src = "assets/robo2.gif";
        }
        
        if (document.getElementById("money").innerHTML >= 100){
            document.getElementById("upgradeDois").innerHTML = '<div class="iconeUpgrade">$500</div><div class="internoUpgrade">Fazer curso de DS</div>';
            document.getElementById("upgradeDois").className = "upgrade"; 
        }if(moneysPorClick >= 4){
            document.getElementById("upgradeDois").innerHTML = '<div class="iconeUpgrade">$500</div><div class="internoUpgrade">Fazer curso de DS</div>';
            document.getElementById("upgradeDois").className = "upgrade";
            document.getElementById("upgradeDois").disabled = true;
            document.getElementById("robo").src = "assets/robo2.gif";
        }
        
        if (document.getElementById("money").innerHTML >= 500){
            document.getElementById("upgradeTres").innerHTML = '<div class="iconeUpgrade">$2500</div><div class="internoUpgrade">Comprar upgrade puberdade</div>';
            document.getElementById("upgradeTres").className = "upgrade";
        }if(moneysPorClick >= 8){
            document.getElementById("upgradeTres").innerHTML = '<div class="iconeUpgrade">$2500</div><div class="internoUpgrade">Comprar upgrade puberdade</div>';
            document.getElementById("upgradeTres").className = "upgrade";
            document.getElementById("upgradeTres").disabled = true;
            document.getElementById("robo").src = "assets/robo3.gif";
        }
        
        if (document.getElementById("money").innerHTML >= 2500){
            document.getElementById("upgradeQuatro").innerHTML = '<div class="iconeUpgrade">$10000</div><div class="internoUpgrade">Fazer falculdade de DS</div>';
            document.getElementById("upgradeQuatro").className = "upgrade";
        } if(moneysPorClick >= 16){
            document.getElementById("upgradeQuatro").innerHTML = '<div class="iconeUpgrade">$10000</div><div class="internoUpgrade">Fazer faculdade de DS</div>';
            document.getElementById("upgradeQuatro").className = "upgrade";
            document.getElementById("upgradeQuatro").disabled = true;
            document.getElementById("robo").src = "assets/robo4.gif";
        }
            
        
        if (document.getElementById("money").innerHTML >= 10000){
            document.getElementById("upgradeCinco").innerHTML = '<div class="iconeUpgrade">$50000</div><div class="internoUpgrade">Comprar upgrade de armamamento(?)</div>';
            document.getElementById("upgradeCinco").className = "upgrade";
        } if(moneysPorClick >= 32){
                document.getElementById("upgradeCinco").className = "upgrade";
                document.getElementById("upgradeCinco").innerHTML = '<div class="iconeUpgrade">$50000</div><div class="internoUpgrade">Comprar upgrade de armamento(?)</div>';
                document.getElementById("upgradeCinco").disabled = true;
                document.getElementById("robo").src = "assets/robo5.gif";
            }
        }
        


        let valor;
        function compra(valor){
            dinheirinhos = dinheirinhos - valor;
            sessionStorage.setItem("dinheirinhosGuardados", dinheirinhos.toString());
            document.getElementById("money").innerHTML = dinheirinhos;
            //checarTarefas();
        }

        
        function upUm(){
        if(document.getElementById("upgradeUm").disabled == false){
            if(dinheirinhos >= 100){
            document.getElementById("upgradeUm").disabled = true;
            compra(100);
            moneysPorClick = moneysPorClick *2;
            sessionStorage.setItem("mpcGuardados", moneysPorClick.toString());
            document.getElementById("robo").src = "assets/robo2.gif";
            document.getElementById("tarefasUm").disabled = false;
            document.getElementById("tarefasUm").innerHTML = '<div class="iconeTarefas">+$10</div><div class="internoTarefas">Assaltar robôs descarregados<div class="barra"><div class="progresso" id="progressoUm"></div></div></div>';

            document.getElementById("tarefasDois").disabled = false; 
            document.getElementById("tarefasDois").innerHTML = '<div class="iconeTarefas">-$95</div><div class="internoTarefas">Fazer ENEM<div class="barra"><div class="progresso" id="progressoDois"></div></div></div>'
            }
        }
        }

        function upDois(){
                upUm();
        if(document.getElementById("upgradeDois").disabled == false){
            if(dinheirinhos >= 500){
            document.getElementById("upgradeDois").disabled = true;
            compra(500);
            moneysPorClick = moneysPorClick *2;
            sessionStorage.setItem("mpcGuardados", moneysPorClick.toString());
            document.getElementById("robo").src = "assets/robo2.gif";
            document.getElementById("tarefasTres").disabled = false;
            document.getElementById("tarefasTres").innerHTML = '<div class="iconeTarefas">+$45</div><div class="internoTarefas">Vender lanche no recreio<div class="barra"><div class="progresso" id="progressoTres"></div></div></div>';

            document.getElementById("tarefasQuatro").disabled = false; 
            document.getElementById("tarefasQuatro").innerHTML = '<div class="iconeTarefas">+$79</div><div class="internoTarefas">Vender sites feitos por IA<div class="barra"><div class="progresso" id="progressoQuatro"></div></div></div>'
            }
        }    
        }

        function upTres(){
                upUm();
                upDois();
        if(document.getElementById("upgradeTres").disabled == false){
            if(dinheirinhos >= 2500){
            document.getElementById("upgradeTres").disabled = true;
            compra(2500);
            moneysPorClick = moneysPorClick *2;
            sessionStorage.setItem("mpcGuardados", moneysPorClick.toString());
            document.getElementById("robo").src = "assets/robo3.gif";
             document.getElementById("tarefasCinco").disabled = false;
            document.getElementById("tarefasCinco").innerHTML = '<div class="iconeTarefas">+$189</div><div class="internoTarefas">Assaltar robôs carregados<div class="barra"><div class="progresso" id="progressoCinco"></div></div></div>';

            document.getElementById("tarefasSeis").disabled = false; 
            document.getElementById("tarefasSeis").innerHTML = '<div class="iconeTarefas">+$315</div><div class="internoTarefas">Vender sites roubados<div class="barra"><div class="progresso" id="progressoSeis"></div></div></div>'
            }
        }
        }

        function upQuatro(){
            upUm();
            upDois();
            upTres();
        if(document.getElementById("upgradeQuatro").disabled == false){
            if(dinheirinhos >= 10000){
            document.getElementById("upgradeQuatro").disabled = true;
            compra(10000);
            moneysPorClick = moneysPorClick *2;
            sessionStorage.setItem("mpcGuardados", moneysPorClick.toString());
            document.getElementById("robo").src = "assets/robo3.gif";
              document.getElementById("tarefasSete").disabled = false;
            document.getElementById("tarefasSete").innerHTML = '<div class="iconeTarefas">+$459</div><div class="internoTarefas">uber<div class="barra"><div class="progresso" id="progressoSete"></div></div></div>';
            }
        }
        }

        function upCinco(){
            upUm();
            upDois();
            upTres();
            upQuatro();
        if(document.getElementById("upgradeCinco").disabled == false){
            if(dinheirinhos >= 50000){
            document.getElementById("upgradeCinco").disabled = true;
            compra(50000);
            moneysPorClick = moneysPorClick *2;
            sessionStorage.setItem("mpcGuardados", moneysPorClick.toString());
            document.getElementById("robo").src = "assets/robo4.gif";
            document.getElementById("tarefasOito").disabled = false;
            document.getElementById("tarefasOito").innerHTML = '<div class="iconeTarefas">+$1505</div><div class="internoTarefas">Ameaçar robôs de morte<div class="barra"><div class="progresso" id="progressoOito"></div></div></div>';
      
            }
        }
        }




        let cheque;
        function deposito(cheque){
            dinheirinhos = dinheirinhos + cheque;
            sessionStorage.setItem("dinheirinhosGuardados", dinheirinhos.toString());
            document.getElementById("money").innerHTML = dinheirinhos;
            checarUpgrades()
        }

        function checarTarefas(){
        const idsTarefas = [
            "tarefasUm", "tarefasDois", "tarefasTres", "tarefasQuatro",
            "tarefasCinco", "tarefasSeis", "tarefasSete", "tarefasOito"
        ];
        idsTarefas.forEach(function (id) {
            document.getElementById(id).disabled = true;
        });

        if(moneysPorClick >= 2){
            document.getElementById("tarefasUm").disabled = false;
            document.getElementById("tarefasUm").innerHTML = '<div class="iconeTarefas">+$10</div><div class="internoTarefas">Assaltar robôs descarregados<div class="barra"><div class="progresso" id="progressoUm"></div></div></div>';

            document.getElementById("tarefasDois").disabled = false; 
            document.getElementById("tarefasDois").innerHTML = '<div class="iconeTarefas">-$95</div><div class="internoTarefas">Fazer ENEM<div class="barra"><div class="progresso" id="progressoDois"></div></div></div>'
        }

        if(moneysPorClick >= 4){
            document.getElementById("tarefasTres").disabled = false;
            document.getElementById("tarefasTres").innerHTML = '<div class="iconeTarefas">+$45</div><div class="internoTarefas">Vender lanche no recreio<div class="barra"><div class="progresso" id="progressoTres"></div></div></div>';

            document.getElementById("tarefasQuatro").disabled = false; 
            document.getElementById("tarefasQuatro").innerHTML = '<div class="iconeTarefas">+$79</div><div class="internoTarefas">Vender sites feitos por IA<div class="barra"><div class="progresso" id="progressoQuatro"></div></div></div>'
        }

        if(moneysPorClick >= 8){
            document.getElementById("tarefasCinco").disabled = false;
            document.getElementById("tarefasCinco").innerHTML = '<div class="iconeTarefas">+$189</div><div class="internoTarefas">Assaltar robôs carregados<div class="barra"><div class="progresso" id="progressoCinco"></div></div></div>';

            document.getElementById("tarefasSeis").disabled = false; 
            document.getElementById("tarefasSeis").innerHTML = '<div class="iconeTarefas">+$315</div><div class="internoTarefas">Vender sites roubados<div class="barra"><div class="progresso" id="progressoSeis"></div></div></div>'
        }

        if(moneysPorClick >= 16){
            document.getElementById("tarefasSete").disabled = false;
            document.getElementById("tarefasSete").innerHTML = '<div class="iconeTarefas">+$459</div><div class="internoTarefas">uber<div class="barra"><div class="progresso" id="progressoSete"></div></div></div>';
        }
            
        if(moneysPorClick >= 32){
            document.getElementById("tarefasOito").disabled = false;
            document.getElementById("tarefasOito").innerHTML = '<div class="iconeTarefas">+$1505</div><div class="internoTarefas">Ameaçar robôs de morte<div class="barra"><div class="progresso" id="progressoOito"></div></div></div>';
        }
    }





        function taUm(){
            //barraProgresso(50, "progressoUm");
            var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoUm").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoUm").style.width = width + "%";
            }, 50)
            }
            document.getElementById("tarefasUm").disabled = true;
            setTimeout(() => {
                deposito(10)
                document.getElementById("tarefasUm").disabled = false;
            }, 5000);
        }



        function taDois(){
            if(dinheirinhos >= 95){


              var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoDois").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoDois").style.width = width + "%";
            }, 378000)
            }  
            //barraProgresso(378000, "progressoDois");
            dinheirinhos = dinheirinhos - 95;
            sessionStorage.setItem("dinheirinhosGuardados", dinheirinhos.toString());
            document.getElementById("money").innerHTML = dinheirinhos;
            
            document.getElementById("tarefasDois").disabled = true;
            
            setTimeout(() => {
                document.getElementById("tarefasDois").disabled = false;
            }, 378000000);
        } else alert("Sem dinheiro! Pobre!")
        }

        function taTres(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoTres").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoTres").style.width = width + "%";
            }, 200)
            }
            document.getElementById("tarefasTres").disabled = true;
            setTimeout(() => {
                deposito(45)
                document.getElementById("tarefasTres").disabled = false;
            }, 20000);
        }

        function taQuatro(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoQuatro").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoQuatro").style.width = width + "%";
            }, 250)
            }
            document.getElementById("tarefasQuatro").disabled = true;
            setTimeout(() => {
                deposito(79)
                document.getElementById("tarefasQuatro").disabled = false;
            }, 25000);
        }


        function taCinco(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoCinco").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoCinco").style.width = width + "%";
            }, 350)
            }
            document.getElementById("tarefasCinco").disabled = true;
            setTimeout(() => {
                deposito(189)
                document.getElementById("tarefasCinco").disabled = false;
            }, 35000);
        }
        

        function taSeis(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoSeis").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoSeis").style.width = width + "%";
            }, 380)
            }
            document.getElementById("tarefasSeis").disabled = true;
            setTimeout(() => {
                deposito(315)
                document.getElementById("tarefasSeis").disabled = false;
            }, 38000);
        }


        function taSete(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoSete").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoSete").style.width = width + "%";
            }, 600)
            }
            document.getElementById("tarefasSete").disabled = true;
            setTimeout(() => {
                deposito(459)
                document.getElementById("tarefasSete").disabled = false;
            }, 60000);
        }


        function taOito(){
             var ligada = 0;

            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById("progressoOito").style.width = 0 + "%";
                } width++;
                document.getElementById("progressoOito").style.width = width + "%";
            }, 800)
            }
            document.getElementById("tarefasOito").disabled = true;
            setTimeout(() => {
                deposito(1505)
                document.getElementById("tarefasOito").disabled = false;
            }, 80000);
        }

        var ligada = 0;
        function barraProgresso(tempo, progressoId){
            if(ligada == 0){
                ligada = 1;
                var width = 1;
             var intervalo = setInterval(function(){
                if(width >= 100){
                    ligada = 0;
                    clearInterval(intervalo)
                    width = 0;
                    document.getElementById(progressoId).style.width = 0 + "%";
                    
                } width++;
                document.getElementById(progressoId).style.width = width + "%";
            }, tempo)
        }
        
        }

       /* const robo = ["test.jpg", "teste.jpg"];
	  let gira = 0;


            setInterval(animaRobo, 2000);

        function animaRobo(){
            gira++;
            if(gira >= robo.length){
                gira = 0;
            }
            document.getElementById("robo").src = robo[gira]
        }*/

   

function limpar(){
    sessionStorage.clear();
    window.location.reload();

}

    function Cookie(nome) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === nome) return value;
    }
    return "";
}

// ** ESTE BLOCO FOI REMOVIDO/MOVIDO PARA O window.addEventListener("load", ...) **
/*
window.onload = function () {
    const nome = Cookie("nomeJogador");
    if (nome) {
        document.getElementById("evento").innerText = "🤖 Bem-vindo de volta, " + nome + "!";
    }
};
*/



    /*fetch(url)

    .then(res => {
        if (!res.ok) {
            throw new Error('Não foi possível puxar o número');
        }
        return res.json();
    })

    .then(dados => {

    })*/

