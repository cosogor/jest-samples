function filterByTerm(inputArr, searchTerm) {
  if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}
module.exports = filterByTerm;