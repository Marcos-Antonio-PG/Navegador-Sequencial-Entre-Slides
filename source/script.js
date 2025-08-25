const cards = document.querySelectorAll('.cards')
let indice = 0

function carregarCards() {
    cards.forEach(cards => cards.style.display = "none")

    cards[indice].style.display = "block"
}

carregarCards()

function avancarCard() {
    if (indice < cards.length - 1) {
        indice++

        carregarCards()
    } else {
        alert('não há mais personagens')
    }
}

function voltarCards() {  
    if (indice > 0) {
        indice--

        carregarCards()
    } else {
        alert('não há mais personagens.')
    }
}
