const dataAtual = document.getElementById("dataAtual");
dataAtual.value = new Date().getFullYear();
document.getElementById("ano").textContent = dataAtual.value;

function calcular() {
    const dataNasc = document.getElementById("dataNasc").value;
    const dataAtual = document.getElementById("dataAtual").value;

    if (!dataNasc || !dataAtual) {
        alert("Por favor, preencha todos os campos.");
        return;
    } else {

    let dataNascFormatada = dataNasc.split("-");
    
    let somaDataNascAno = parseInt(dataNascFormatada[0]) + parseInt(dataNascFormatada[1]) + parseInt(dataNascFormatada[2]) + parseInt(dataAtual);
    
    while (somaDataNascAno > 22) {
        let digitos = somaDataNascAno.toString().split('');
        
        let novaSoma = 0;
        
        for (let i = 0; i < digitos.length; i++) {
            novaSoma += parseInt(digitos[i]);
        }
        somaDataNascAno = novaSoma;
    }
    
    showResult(somaDataNascAno);
    return;
    }
}

function showResult(numeroArcano) {
    const result = document.getElementById("result");
    const arcano = document.getElementById("arcano");
    const arcanoName = document.getElementById("arcanoName");
    const resultText = document.getElementById("resultText");
    result.classList.add("show");
    if (numeroArcano == 1) {
        arcano.src = "./img/01oMago.png";
        arcano.alt = "O Mago";
        arcanoName.innerHTML = "I - O Mago";
        resultText.innerHTML = "";
    } else if (numeroArcano == 2) {
        arcano.src = "./img/02aPapisa.png";
        arcano.alt = "A Papisa";
        arcanoName.innerHTML = "II - A Papisa";
        resultText.innerHTML = "";
    } else if (numeroArcano == 3) {
        arcano.src = "./img/03aImperatriz.png";
        arcano.alt = "A Imperatriz";
        arcanoName.innerHTML = "III - A Imperatriz";
        resultText.innerHTML = "";
    } else if (numeroArcano == 4) {
        arcano.src = "./img/04oImperador.png";
        arcano.alt = "O Imperador";
        arcanoName.innerHTML = "IV - O Imperador";
        resultText.innerHTML = "";
    } else if (numeroArcano == 5) {
        arcano.src = "./img/05oPapa.png";
        arcano.alt = "O Papa";
        arcanoName.innerHTML = "V - O Papa";
        resultText.innerHTML = "";
    } else if (numeroArcano == 6) {
        arcano.src = "./img/06osAmantes.png";
        arcano.alt = "Os Amantes";
        arcanoName.innerHTML = "VI - Os Amantes";
        resultText.innerHTML = "";
    } else if (numeroArcano == 7) {
        arcano.src = "./img/07oCarro.png";
        arcano.alt = "O Carro";
        arcanoName.innerHTML = "VII - O Carro";
        resultText.innerHTML = "";
    } else if (numeroArcano == 8) {
        arcano.src = "./img/08aJustica.png";
        arcano.alt = "A Justiça";
        arcanoName.innerHTML = "VIII - A Justiça";
        resultText.innerHTML = "";
    } else if (numeroArcano == 9) {
        arcano.src = "./img/09oEremita.png";
        arcano.alt = "O Eremita";
        arcanoName.innerHTML = "IX - O Eremita";
        resultText.innerHTML = "";
    } else if (numeroArcano == 10) {
        arcano.src = "./img/10rodaDaFortuna.png";
        arcano.alt = "Roda da Fortuna";
        arcanoName.innerHTML = "X - Roda da Fortuna";
        resultText.innerHTML = "";
    } else if (numeroArcano == 11) {
        arcano.src = "./img/11aForca.png";
        arcano.alt = "A Força";
        arcanoName.innerHTML = "XI - A Força";
        resultText.innerHTML = "";
    } else if (numeroArcano == 12) {
        arcano.src = "./img/12oPendurado.png";
        arcano.alt = "O Pendurado";
        arcanoName.innerHTML = "XII - O Pendurado";
        resultText.innerHTML = "";
    } else if (numeroArcano == 13) {
        arcano.src = "./img/13aMorte.png";
        arcano.alt = "A Morte";
        arcanoName.innerHTML = "XIII - A Morte";
        resultText.innerHTML = "";
    } else if (numeroArcano == 14) {
        arcano.src = "./img/14aTemperanca.png";
        arcano.alt = "A Temperança";
        arcanoName.innerHTML = "XIV - A Temperança";
        resultText.innerHTML = "";
    } else if (numeroArcano == 15) {
        arcano.src = "./img/15oDiabo.png";
        arcano.alt = "O Diabo";
        arcanoName.innerHTML = "XV - O Diabo";
        resultText.innerHTML = "";
    } else if (numeroArcano == 16) {
        arcano.src = "./img/16aTorre.png";
        arcano.alt = "A Torre";
        arcanoName.innerHTML = "XVI - A Torre";
        resultText.innerHTML = "";
    } else if (numeroArcano == 17) {
        arcano.src = "./img/17aEstrela.png";
        arcano.alt = "A Estrela";
        arcanoName.innerHTML = "XVII - A Estrela";
        resultText.innerHTML = "";
    } else if (numeroArcano == 18) {
        arcano.src = "./img/18aLua.png";
        arcano.alt = "A Lua";
        arcanoName.innerHTML = "XVIII - A Lua";
        resultText.innerHTML = "";
    } else if (numeroArcano == 19) {
        arcano.src = "./img/19oSol.png";
        arcano.alt = "O Sol";
        arcanoName.innerHTML = "XIX - O Sol";
        resultText.innerHTML = "";
    } else if (numeroArcano == 20) {
        arcano.src = "./img/20oJulgamento.png";
        arcano.alt = "O Julgamento";
        arcanoName.innerHTML = "XX - O Julgamento";
        resultText.innerHTML = "";
    } else if (numeroArcano == 21) {
        arcano.src = "./img/21aMundo.png";
        arcano.alt = "A Mundo";
        arcanoName.innerHTML = "XXI - A Mundo";
        resultText.innerHTML = "";
    } else if (numeroArcano == 22) {
        arcano.src = "./img/22oLouco.png";
        arcano.alt = "O Louco";
        arcanoName.innerHTML = "XXII - O Louco";
        resultText.innerHTML = "";
    }

    return 0;
}