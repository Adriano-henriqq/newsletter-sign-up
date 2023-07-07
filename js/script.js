
const botao = document.getElementById('botao');
const input = document.getElementById('email');

let mensagemErro = document.querySelector("[data-erro]")

botao.addEventListener('click', (e)=>{
    e.preventDefault();
    verificaEmail();
    const valorInput = input.value;
    localStorage.setItem('valorDoInput', valorInput);  
})
function verificaEmail(){
    let emailValido = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
   
    if(emailValido.test(input.value) === false){
        input.classList.add('mensagem__erro')
        return mensagemErro.innerHTML = 'Valid email required';
        
    }else{
        console.log('emailValido')
        input.classList.remove('mensagem__erro')
        mensagemErro.innerHTML = ''
        window.location.href = "./sucess.html"
    }
}

