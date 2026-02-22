let mixed = ["one", 2, true, "four", false, 6, "seven", 8.0, "nine", true ];
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "boolean") {
        console.log(mixed[i]);
    }
}