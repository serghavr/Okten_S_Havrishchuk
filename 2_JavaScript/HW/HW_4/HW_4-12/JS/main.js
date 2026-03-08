function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const found = currencyValues.find(item => item.currency === exchangeCurrency);
    if (!found) return null;
    return sumUAH / found.value;
}

console.log(exchange(10000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'USD')) // => 400
console.log(exchange(10000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'EUR')) // => 238.09
console.log(exchange(10000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'GBP')) // => null