let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')
for (let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}
document.write('</ul>')


document.write('<ul>')
i = 0
while (i < listOfItems.length) {
    document.write(`<li>${listOfItems[i]}</li>`);
    i++
}
document.write('</ul>')