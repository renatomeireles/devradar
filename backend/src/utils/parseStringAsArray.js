module.exports = function parseStringAsArray(arrayAsString) {
  if (typeof arrayAsString === "string") {
    return arrayAsString.split(",").map(tech => tech.trim());
  }
};
