
const btnSucess = document.querySelector('.btn__sucess');
const pegaValorDoInput = localStorage.getItem('valorDoInput');

exibeParagrafo(pegaValorDoInput)

 function exibeParagrafo(valor) {    
    let paragrafo =  document.getElementById('paragrafo');
     paragrafo.innerHTML = 
    `A confirmation email has been sent to <strong>${valor}</strong>. 
   Please open it and click the button inside to confirm your subscription`;
}
btnSucess.addEventListener('click', () =>{
    window.location.href = 'index.html'
})