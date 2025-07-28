let listaDeNumerosSorteados = [];
let max = 20;
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let numero = numeroAleatorio();

textoInicial();
let i = 5;

console.log (numero);

function verificarChute() {  
    let chute = Number(document.querySelector('input').value);
    let text = document.querySelector('h1')
    let vida = document.querySelector('p')
        if(chute == numero){
            text.innerHTML = 'Voce ganhou!';
            vida.innerHTML = 'Parabens!';
            document.getElementById('chutar').setAttribute('disabled', "");
            document.getElementById('reiniciar').removeAttribute('disabled');
            //break;
        }
        else{
            if(chute > numero){
                text.innerHTML = 'o numero secreto e menor que o chutado!';
                i--;
                vida.innerHTML = ("vidas: " + i);
                
                //alert(`vidas restantes ${i}`);
            }
            else{
                if(chute < numero){
                    text.innerHTML = 'o numero secreto e maior que o chutado!';
                    i--;
                    vida.innerHTML = ("vidas: " + i);
                    //alert("vidas restantes " + i);
                } 
                
            }
        }
       
   if (i == 0){
       let morreu = document.querySelector('h1')
           morreu.innerHTML = 'GAMER OVER'+ '\n' +'o numero era ' + numero;
   }
   limparCampo();
}
function numeroAleatorio(){
    
    let numeroEscolhido = Math.floor(Math.random() *max) +1;
    if (listaDeNumerosSorteados.length == max-1){
        listaDeNumerosSorteados.splice(0, listaDeNumerosSorteados.length);
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio ();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function textoInicial(){
    titulo.innerHTML = 'Jogo do numero Secreto';
    paragrafo.innerHTML = ('Escolha um numero entre 1 e ' + max);
}

function reiniciarJogo(){
    numero = numeroAleatorio();
    limparCampo();
    i = 5;
    textoInicial();
    document.getElementById('reiniciar').setAttribute ('disabled',true);
    document.getElementById('chutar').removeAttribute('disabled');
}