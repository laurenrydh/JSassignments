const hands = ['rock', 'paper', 'scissors']

function getHand() {
    let hand = parseInt(Math.random()*10)%3
    return hands[hand]
}

let player1 = {name: 'Lauren', getHand: getHand}
let player2 = {name: 'Dylan', getHand: getHand}
let player3 = {name: 'Pam', getHand: getHand}
let player4 = {name: 'Dennis', getHand: getHand}


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

function playGame(player1, player2, playUntil) {
    let score1 = 0
    let score2 = 0

    while (score1 < playUntil && score2 < playUntil) {
        let winner = playRound(player1, player2)

        if (winner === player1) {
            score1++
        } else if (winner === player2) {
            score2++
        }
    }

    if (score1 > score2) {
        return player1
    } else {
        return player2
    }
}

function playTournament (player1, player2, player3, player4, playUntil) {
    let winner1 = playGame(player1, player2, playUntil)
    console.log(winner1.name + ' won the round and is moving on to the finals!')


    let winner2 = playGame(player3, player4, playUntil)
    console.log(winner2.name + ' won the round and is moving on to the finals!')


    let champion = playGame(winner1, winner2, playUntil)
    console.log(champion.name + ' is the world champion!')
}

playTournament(player1, player2, player3, player4, 5)