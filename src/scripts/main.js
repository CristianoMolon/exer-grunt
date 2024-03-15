document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let x = Math.floor(Math.rendom() * 20) + 1;

        document.getElementById('rolagem').innerText = x
        document.querySelector('.resultado').style.display = 'block';
    })
})