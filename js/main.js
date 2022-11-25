document.getElementById('button').addEventListener('click', function() {
    if (window.location.href.indexOf("recebaseusalarioantes.com.br") > -1) {
        window.open(`https://wa.me/5534998394102?text=Quero%20receber%20meu%20sal%C3%A1rio%20antes`, '_blank');
    } else if (window.location.href.indexOf("seusalarioantes.com.br") > -1) {
        window.open(`https://wa.me/5534998394102?text=Como%20posso%20receber%20meu%20sal%C3%A1rio%20antes?`, '_blank');
    } else if (window.location.href.indexOf("salarioantes.com.br") > -1) {
        window.open(`https://wa.me/5534998394102?text=Opa,%20salario%20antes?%20quero!`, '_blank');
    } else if (window.location.href.indexOf("suacontanoazul.com.br") > -1) {
        window.open(`https://wa.me/5534998394102?text=Quero%20sair%20do%20vermelho%20e%20ter%20minha%20conta%20no%20Azul`, '_blank');
    } else {
        window.open(`https://wa.me/5534998394102?text=Quero%20receber%20meu%20sal%C3%A1rio%20antes`, '_blank');
    }
});