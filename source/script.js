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
    } else if (indice == 4){
        indice = 0

        carregarCards()

    } else {
        alert('não há mais personagens')
    }
}

function voltarCards() {  
    if (indice > 0) {
        indice--

        carregarCards()
    } else if (indice == 0) {
        indice = 4

        carregarCards()

    } else {
        alert('não há mais personagens.')
    }
}
