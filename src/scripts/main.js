document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();    
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeoAleatorio = (Math.random() * numeroMaximo) +1;
        numeoAleatorio = Math.floor(numeoAleatorio);

        document.getElementById('resultado-valor').innerText = numeoAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    })
})