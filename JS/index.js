function conversaoBase(){
     resposta.style.display = 'flex'
    const numeral = numero.value;
    const base = Number(base_numero.value);
    const baseNumero = Number(baseNumeroConvertido.value);
    const conversao = parseInt(numeral, base)
     var verificacaoCampo = false;
    var arrayNumeral = numeral.split("")
    if(base == baseNumero){
        respostaConversao.innerHTML = `O Númeral ja está na base solicitada`
    }else{

        for (var i =0; i<arrayNumeral.length; i++){
            if(base == 2 && arrayNumeral[i] != 0 && arrayNumeral[i] !=1){
                verificacaoCampo = true
            }
        }
        
        if(verificacaoCampo){
            respostaConversao.innerHTML = `Número inválido conforme a respectiva base`
        }else {
            
            respostaConversao.innerHTML =`
             ${conversao.toString(baseNumero).toUpperCase()}`
             respostaHistorico.innerHTML += `Conversão - ${numeral} <span>${base}</span> para a base ${baseNumero} = ${conversao.toString(baseNumero)}<span>${baseNumero}</span><br><br>`
        }
    }
}

function operacaoBase(){
    resposta.style.display = 'flex'
    const primeiroNumero = input_primeiro_numero.value
    const segundoNumero = input_segundo_numero.value
    const basePrimeiroNumero = Number(select_base_primeiro_numero.value)
    const baseSegundoNumero = Number(select_base_segundo_numero.value)
    const conversaoPrimeiroNumero = parseInt(primeiroNumero, basePrimeiroNumero)
    const conversaoSegundoNumero = parseInt(segundoNumero, baseSegundoNumero)
    const operador = select_operador.value
    const operacao = `${conversaoPrimeiroNumero} ${operador} ${conversaoSegundoNumero} `


    var arrayNumero1 = primeiroNumero.split("")
    var arrayNumero2 = segundoNumero.split("")

    var teste = false

    for(var i = 0; i<arrayNumero1.length; i++){
        if(basePrimeiroNumero == 2 && arrayNumero1[i] !=0 && arrayNumero1[i] !=1 && !teste){
            teste = true
        }else if(basePrimeiroNumero == 8 && arrayNumero1[i] <0 || arrayNumero1[i] >7 && !teste){
            teste = true
        }
    }
    
    for(var i = 0; i<arrayNumero2.length; i++){
        if(baseSegundoNumero == 2 && arrayNumero2[i] !=0 && arrayNumero2[i] !=1 && !teste){
            teste = true
        }else if(baseSegundoNumero == 8 && (arrayNumero2[i] <0 || arrayNumero2[i] >7) && !teste){
            teste = true
        }
    }

    respostaCalculadora.innerHTML = ``
    if(teste){
        respostaCalculadora.innerHTML = `Número(s) inválido conforme a respectiva base`
        teste = false
    }else{
        const resultado = eval(operacao)
        respostaCalculadora.innerHTML = `
        
        Decimal: ${resultado}<br>
        Octal: ${resultado.toString(8)}<br>
        Binário: ${resultado.toString(2)}<br>
        Hexadecimal: ${resultado.toString(16).toUpperCase()}<br>
        `
        respostaHistorico.innerHTML += `Operação Aritmética - 
        ${primeiroNumero}<span>${basePrimeiroNumero}</span> ${operador} ${segundoNumero}<span>${baseSegundoNumero}</span>
            <br><br>
        Decimal: ${resultado}<br>
        Octal: ${resultado.toString(8)}<br>
        Binário: ${resultado.toString(2)}<br>
        Hexadecimal: ${resultado.toString(16).toUpperCase()}<br><br>
        `
        teste = false
        }
}


function mostrarConversor(){
    containerBody.style.display = 'flex'
    containerCalculadora.style.display = 'none'
}

function mostrarCalculadora(){
    containerBody.style.display = 'none'
    containerCalculadora.style.display = 'flex'
}












