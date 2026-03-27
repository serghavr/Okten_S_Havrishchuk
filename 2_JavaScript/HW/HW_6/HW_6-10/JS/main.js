// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const suits = [
    { name: 'spade', color: 'black' },
    { name: 'diamond', color: 'red' },
    { name: 'heart', color: 'red' },
    { name: 'clubs', color: 'black' }
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

console.log(deck);

const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadeAce);

const allSixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', allSixes);

const redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);

const bigValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
const bigClubs = deck.filter(card =>
    card.cardSuit === 'clubs' && bigValues.includes(card.value)
);
console.log('Трефи від 9 і вище:', bigClubs);