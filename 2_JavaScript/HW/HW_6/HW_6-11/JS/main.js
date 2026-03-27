// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const suits = [
    { name: 'spade', color: 'black' },
    { name: 'diamond', color: 'red' },
    { name: 'heart', color: 'red' },
    { name: 'club', color: 'black' }
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit.name,
            value: value,
            color: suit.color
        });
    }
}
const sortedBySuits = deck.reduce((acc, card) => {
    const suitKey = card.cardSuit + 's';
    acc[suitKey].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log('По мастях',sortedBySuits);
