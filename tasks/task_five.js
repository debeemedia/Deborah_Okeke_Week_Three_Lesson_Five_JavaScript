// Filter elements in an array

const candidates = ['Arinze', 'Ahmed', 'Toochi', 'Tosin', 'Timothy', 'Bello', 'Bona', 'Charles']

const alphabetical = candidates.filter(function (name) {
  return name.startsWith('T') === false
}
)
console.log(alphabetical)
