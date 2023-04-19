const hands = ['rock', 'paper', 'scissors']

function getHand() {
    let hand = parseInt(Math.random()*10)%3
    return hands[hand]
}

let player1 = {
    name: 'Lauren',
    getHand: getHand,
    score: 0
}

let player2 = {
    name: 'Dylan',
    getHand: getHand,
    score: 0
}


function playRound(player1, player2) {

    let hand1 = player1.getHand()
    let hand2 = player2.getHand()

    //player 2 wins
    if ((hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'scissors' && hand2 === 'rock')) {
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '.', player2.name + ' wins!')
        return player2
    } else if (hand1 === hand2) { // Tie game
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '.', "It's a tie!")
        return null
    } else { // Player 1 wins
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '.', player1.name + ' wins!')
        return player1
    }
}


const playButton = document.getElementById('playButton')
const laurenScore = document.getElementById('laurenScore')
const dylanScore = document.getElementById('dylanScore')
const result = document.getElementById('result')
playButton.addEventListener('click', (event) => {
    const winner = playRound(player1, player2)
        if (winner === player1) {
            player1.score += 1
            laurenScore.innerText = "Score: " + player1.score
            result.innerText = player1.name + " Wins!"
        } else if (winner === player2) {
            player2.score += 1
            dylanScore.innerText = "Score: " + player2.score
            result.innerText = player2.name + " Wins!"
        } else {
            result.innerText = "Boo, no one wins :("
        }

})
