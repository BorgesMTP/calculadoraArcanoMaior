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
    const arcanoSignificado = document.getElementById("arcanoSignificado");
    result.classList.add("show");
    if (numeroArcano == 1) {
        arcano.src = "./img/01oMago.png";
        arcano.alt = "O Mago";
        arcanoName.innerHTML = "I - O Mago";
        arcanoSignificado.textContent = "Este é um ano de inícios, iniciativas e de colocar a 'mão na massa'. O Mago indica que você tem todas as ferramentas necessárias na sua mesa para começar algo novo, seja um projeto, um trabalho ou um estudo. A energia favorece a rapidez mental, a criatividade e a autonomia. É um momento para agir e não para esperar. O perigo deste ano reside na dispersão ou na superficialidade; por isso, foque sua vontade em objetivos claros. É o ano ideal para plantar as sementes do que você quer colher num ciclo futuro.";
    } else if (numeroArcano == 2) {
        arcano.src = "./img/02aPapisa.png";
        arcano.alt = "A Papisa";
        arcanoName.innerHTML = "II - A Papisa";
        arcanoSignificado.textContent = "Um ano de gestação, estudo, paciência e silêncio. Diferente do Mago, a Papisa pede que você pare e observe antes de agir. É um período favorável para o autoconhecimento, a intuição e o planejamento estratégico secreto. Coisas podem parecer 'paradas' externamente, mas estão crescendo no invisível. Este arcano sugere que você busque sabedoria e não tenha pressa. Revelações podem surgir, e segredos podem ser importantes. É um excelente ano para estudos acadêmicos, escrita ou para lidar com questões femininas e familiares.";
    } else if (numeroArcano == 3) {
        arcano.src = "./img/03aImperatriz.png";
        arcano.alt = "A Imperatriz";
        arcanoName.innerHTML = "III - A Imperatriz";
        arcanoSignificado.textContent = "Um ano de expansão, criatividade e expressão. A Imperatriz traz a energia da fertilidade e da materialização de ideias. Se na Papisa as coisas estavam sendo gestadas, na Imperatriz elas vêm à luz. É um período excelente para a comunicação, o prazer e o crescimento financeiro. A energia favorece relacionamentos sociais, beleza e conforto. Cuidado apenas com a futilidade ou excesso de vaidade. É um ano para 'florescer' e usar sua inteligência para organizar e comandar sua própria vida com charme e criatividade.";
    } else if (numeroArcano == 4) {
        arcano.src = "./img/04oImperador.png";
        arcano.alt = "O Imperador";
        arcanoName.innerHTML = "IV - O Imperador";
        arcanoSignificado.textContent = "Este é um ano de estrutura, estabilidade e concretização material. O foco está no trabalho, na ordem e na segurança. O Imperador pede que você assuma responsabilidades e consolide o que construiu. É um tempo de agir com lógica, racionalidade e firmeza. Questões ligadas a imóveis, construção, hierarquia e figura paterna podem ganhar destaque. É um ano ruim para riscos desnecessários, mas excelente para solidificar bases que durarão por muito tempo. A disciplina será sua maior aliada.";
    } else if (numeroArcano == 5) {
        arcano.src = "./img/05oPapa.png";
        arcano.alt = "O Papa";
        arcanoName.innerHTML = "V - O Papa";
        arcanoSignificado.textContent = "Um ano voltado para o ensino, a aprendizagem e os valores morais. O Papa atua como uma ponte entre mundos, favorecendo a comunicação que une pessoas, a mediação de conflitos e a proteção espiritual. É um período para buscar um ideal, uma filosofia de vida ou uma vocação. Pode indicar a formalização de uniões (casamentos, contratos) ou a necessidade de buscar conselhos de especialistas. O desafio do ano é não cair no dogmatismo ou na rigidez de crenças. A benevolência e a paciência são chaves para o sucesso aqui.";
    } else if (numeroArcano == 6) {
        arcano.src = "./img/06osAmantes.png";
        arcano.alt = "Os Amantes";
        arcanoName.innerHTML = "VI - Os Amantes";
        arcanoSignificado.textContent = "Este é o ano das escolhas e do coração. Você provavelmente se verá diante de encruzilhadas onde terá que decidir não apenas com a lógica, mas com o afeto. É um período intenso para relacionamentos, dúvidas emocionais e testes de valores pessoais. O foco está em definir o que você realmente ama e quer seguir. O aspecto social é forte, mas a hesitação pode ser um problema. O ano pede que você assuma o compromisso com suas escolhas para poder evoluir para a próxima etapa.";
    } else if (numeroArcano == 7) {
        arcano.src = "./img/07oCarro.png";
        arcano.alt = "O Carro";
        arcanoName.innerHTML = "VII - O Carro";
        arcanoSignificado.textContent = "Um ano de movimento, vitória e direção. O Carro indica que as coisas vão andar rápido e que você terá o controle das rédeas, desde que mantenha o foco. É um período de conquista, sucesso profissional e superação de obstáculos através da força de vontade. Viagens e mudanças geográficas são muito favorecidas. O alerta aqui é sobre a arrogância ou a falta de cautela; o carro corre muito, e uma curva mal feita pode ser perigosa. Defina seu alvo e avance sem olhar para trás.";
    } else if (numeroArcano == 8) {
        arcano.src = "./img/08aJustica.png";
        arcano.alt = "A Justiça";
        arcanoName.innerHTML = "VIII - A Justiça";
        arcanoSignificado.textContent = "O ano do carma e do reequilíbrio. A Justiça diz que você colherá exatamente o que plantou nos anos anteriores. É um período de rigor, racionalidade e cortes necessários. Questões legais, burocráticas e de contratos estarão em evidência. Não espere 'sorte' neste ano, espere merecimento. É um tempo de colocar a vida em ordem, ser honesto consigo mesmo e cortar excessos. A frieza emocional pode ser necessária para tomar decisões justas e claras.";
    } else if (numeroArcano == 9) {
        arcano.src = "./img/09oEremita.png";
        arcano.alt = "O Eremita";
        arcanoName.innerHTML = "IX - O Eremita";
        arcanoSignificado.textContent = "Um ano de finalização de ciclo, introspecção e sabedoria. O ritmo desacelera drasticamente. É o momento de olhar para dentro, fazer um balanço da vida e iluminar as sombras do passado para não repeti-las. A solidão (ou solitude) será um tema recorrente e necessário. Não é um ano bom para grandes expansões materiais ou inícios afobados. É um ano de 'inverno pessoal': poupe energia, estude, cure feridas antigas e prepare o terreno com prudência para o futuro. A paciência é a grande lição.";
    } else if (numeroArcano == 10) {
        arcano.src = "./img/10rodaDaFortuna.png";
        arcano.alt = "Roda da Fortuna";
        arcanoName.innerHTML = "X - Roda da Fortuna";
        arcanoSignificado.textContent = "Um ano de mudanças, instabilidade e destino. A Roda gira, trazendo altos e baixos que muitas vezes fogem do seu controle direto. O tema é a adaptabilidade. O que estava estagnado pode se mover subitamente, e o que estava certo pode mudar. É preciso 'pegar a onda' das oportunidades quando elas aparecem. O ano pede desapego de planos rígidos. Ciclos se fecham e outros se abrem rapidamente. A sorte pode estar ao seu lado se você souber fluir com os acontecimentos.";
    } else if (numeroArcano == 11) {
        arcano.src = "./img/11aForca.png";
        arcano.alt = "A Força";
        arcanoName.innerHTML = "XI - A Força";
        arcanoSignificado.textContent = "Um ano de domínio sobre os instintos e de inteligência emocional. A Força não fala de força bruta, mas da capacidade sutil de domar as 'feras' internas (medo, raiva, desejo) com determinação e gentileza. É um período de grande energia vital e magnetismo. Você terá energia para enfrentar problemas difíceis e começar novos projetos com garra. A saúde e a sexualidade são temas fortes. O desafio é não reprimir suas vontades, mas canalizá-las de forma produtiva e consciente.";
    } else if (numeroArcano == 12) {
        arcano.src = "./img/12oPendurado.png";
        arcano.alt = "O Pendurado";
        arcanoName.innerHTML = "XII - O Pendurado";
        arcanoSignificado.textContent = "Um ano de pausa forçada, sacrifício e mudança de perspectiva. As coisas podem parecer travadas no mundo material, mas essa parada é necessária para uma evolução interior. É o momento de ver o mundo 'de cabeça para baixo' e entender que nem tudo depende da sua ação direta. Pode haver a sensação de estar preso ou de ter que abrir mão de algo importante. O conselho é: não lute contra a maré. Aceite a pausa para meditar e gestar o novo. O sacrifício feito agora trará frutos espirituais ou insights valiosos depois.";
    } else if (numeroArcano == 13) {
        arcano.src = "./img/13aMorte.png";
        arcano.alt = "A Morte";
        arcanoName.innerHTML = "XIII - A Morte";
        arcanoSignificado.textContent = "Um ano de transformação radical. Não tenha medo do nome: trata-se de 'cortar' o que está podre ou morto na sua vida para que o novo possa nascer. Pode envolver o fim de relacionamentos, empregos ou crenças que não servem mais. É o ano da 'faxina pesada'. A energia é rápida e cirúrgica. Resistir às mudanças neste ano gera sofrimento. A melhor atitude é o desapego. Ao limpar o terreno, você prepara uma fundação incrivelmente fértil para o renascimento que virá a seguir.";
    } else if (numeroArcano == 14) {
        arcano.src = "./img/14aTemperanca.png";
        arcano.alt = "A Temperança";
        arcanoName.innerHTML = "XIV - A Temperança";
        arcanoSignificado.textContent = "Após a tempestade da Morte, a Temperança traz a cura, o equilíbrio e a proteção. É um ano de fluxo suave, de conciliação e de 'colocar água no vinho'. O ritmo é tranquilo e favorece a diplomacia, a amizade e a recuperação da saúde física e mental. É um tempo de paciência e de misturar opostos para criar uma terceira via. Não force situações. A comunicação flui bem e os anjos (ou a sorte sutil) parecem proteger seus passos. Aproveite para descansar e se harmonizar.";
    } else if (numeroArcano == 15) {
        arcano.src = "./img/15oDiabo.png";
        arcano.alt = "O Diabo";
        arcanoName.innerHTML = "XV - O Diabo";
        arcanoSignificado.textContent = "Um ano de intensa energia criativa, sexual e material, mas também de desafios com o ego e a sombra. O Diabo traz paixão e magnetismo. Você pode sentir um forte impulso para ganhar dinheiro, conquistar poder ou viver prazeres intensos. O perigo está nas dependências (emocionais ou químicas) e na obsessão. Porém, se bem canalizada, essa energia é poderosíssima para conquistas materiais e artísticas. O segredo deste ano é aceitar sua natureza humana sem se tornar escravo dela.";
    } else if (numeroArcano == 16) {
        arcano.src = "./img/16aTorre.png";
        arcano.alt = "A Torre";
        arcanoName.innerHTML = "XVI - A Torre";
        arcanoSignificado.textContent = "Um ano de ruptura e libertação súbita. Estruturas que eram rígidas demais (orgulho, ego, situações insustentáveis) tendem a cair para que você possa ver o céu novamente. Pode ser um ano de choques, mas também de imensa alegria libertadora. Muitas vezes, a Torre nos tira de uma 'prisão' que nós mesmos construímos, embora o processo possa ser tumultuado. É um convite para voltar à essência e reconstruir a vida sobre verdades mais sólidas. O que cai, cai porque precisava cair.";
    } else if (numeroArcano == 17) {
        arcano.src = "./img/17aEstrela.png";
        arcano.alt = "A Estrela";
        arcanoName.innerHTML = "XVII - A Estrela";
        arcanoSignificado.textContent = "Um ano de esperança, sorte e proteção divina. A Estrela é o momento de encontrar o seu lugar no mundo e agir com autenticidade. É um período fértil, otimista e suave, onde você volta a acreditar no futuro e a semear seus sonhos. A energia favorece a exposição pública, a beleza e a conexão com a natureza. É um tempo de 'entregar-se' ao fluxo da vida com confiança. Mesmo que os resultados materiais demorem um pouco, o caminho está aberto e iluminado.";
    } else if (numeroArcano == 18) {
        arcano.src = "./img/18aLua.png";
        arcano.alt = "A Lua";
        arcanoName.innerHTML = "XVIII - A Lua";
        arcanoSignificado.textContent = "Um ano de mergulho no inconsciente, na imaginação e no passado. A Lua traz à tona medos, sonhos e intuições profundas. Pode haver confusão mental, ilusões ou mal-entendidos, por isso a clareza objetiva pode faltar. Favorece muito a terapia, a arte e o contato com a família e a ancestralidade. Cuidado com fofocas ou com ver coisas onde não existem. É um ano para navegar nas águas da emoção e aprender a confiar na sua intuição acima da razão.";
    } else if (numeroArcano == 19) {
        arcano.src = "./img/19oSol.png";
        arcano.alt = "O Sol";
        arcanoName.innerHTML = "XIX - O Sol";
        arcanoSignificado.textContent = "Um ano de clareza, sucesso, calor e fraternidade. O Sol 'queima' as neblinas da Lua e traz a realização plena. É um dos melhores arcanos para o amor, parcerias felizes e reconhecimento público. A energia é de vitalidade e alegria. Tudo tende a ficar claro e resolvido. Se você tem filhos, eles podem ser o foco. É um ano para construir, celebrar e compartilhar sua luz com os outros. O sucesso aqui é compartilhado, não solitário.";
    } else if (numeroArcano == 20) {
        arcano.src = "./img/20oJulgamento.png";
        arcano.alt = "O Julgamento";
        arcanoName.innerHTML = "XX - O Julgamento";
        arcanoSignificado.textContent = "Um ano de renascimento e de 'chamado'. O Julgamento indica que uma nova vida está surgindo, muitas vezes através de uma notícia inesperada ou de uma revelação súbita. Situações do passado retornam para serem resolvidas definitivamente. É um despertar de consciência. Você pode sentir uma urgência em mudar de vida ou atender a uma vocação. Família e perdão são temas centrais. É o momento de sair do túmulo da rotina e abraçar uma nova dimensão de existência.";
    } else if (numeroArcano == 21) {
        arcano.src = "./img/21aMundo.png";
        arcano.alt = "A Mundo";
        arcanoName.innerHTML = "XXI - A Mundo";
        arcanoSignificado.textContent = "O ano da realização total. O Mundo é o ápice da jornada, indicando conclusão bem-sucedida de projetos, reconhecimento e plenitude. É um arcano de abertura, viagens (inclusive internacionais) e conexão com o todo. Você se sente no lugar certo, na hora certa. As portas se abrem com facilidade. É o encerramento de um grande ciclo cármico com chave de ouro. Aproveite para celebrar suas conquistas, pois você chegou lá.";
    } else if (numeroArcano == 22) {
        arcano.src = "./img/22oLouco.png";
        arcano.alt = "O Louco";
        arcanoName.innerHTML = "O - O Louco";
        arcanoSignificado.textContent = "Nota: Na sua lógica, se o cálculo der 22, ele para aqui. No Tarô, o Louco é o zero ou o 22. Um ano de liberdade radical, imprevisibilidade e saltos de fé. O Louco caminha sem destino certo, guiado apenas pelo instinto. É um período para largar a bagagem pesada, romper com as convenções sociais e se aventurar no desconhecido. Pode indicar instabilidade financeira ou profissional, mas também uma genialidade criativa imensa. É o ano do 'tudo ou nada'. Se você se permitir ser espontâneo e não temer o ridículo, poderá descobrir caminhos que a razão jamais encontraria.";
    }

    return;
}