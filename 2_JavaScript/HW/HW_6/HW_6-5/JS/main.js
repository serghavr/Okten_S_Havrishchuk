let str = "Ревуть воли як ясла повні";

function stringToArray(str) {
    if (str) {
        const splitStr = str.split(" ")
        return splitStr;
    }
    return ['']
}
console.log(stringToArray(str))