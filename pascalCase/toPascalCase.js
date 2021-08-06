function toPascalCase(title) {
  return title
    .split(" ")
    .map((word) => {
      if (isConjunction(word)) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
}

const isConjunction = (word) => word === "and" || word === "or";
module.exports = toPascalCase;
