
window.onload = function(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(dados => {
            console.log(dados)
            console.log('<img src="' + dados.message + '"></img>')
            document.querySelector('body').innerHTML = '<img src="' + dados.message + '"></img>';
        }
        )

}