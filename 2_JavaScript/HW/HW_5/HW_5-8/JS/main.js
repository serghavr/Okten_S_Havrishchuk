const foobar = (arr) => {
    document.write(`<ul>`)
        for (const item of arr) {
            document.write(`<li>${item}</li>`)
        }
    document.write(`</li>`)
}
foobar([1,'havrishchuk',true,3.14])