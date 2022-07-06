function capitalize(word) {
    let split = word.split("");
    let firstWordCapitalized = split[0].toUpperCase();
    split[0] = firstWordCapitalized;
    return split.join("");
}
module.exports = capitalize;