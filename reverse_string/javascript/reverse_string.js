export const reverse = text => {
  let arrReverse = []

  // loop through the string from the end
  for (let i = text.length - 1; i >= 0; i--)
    arrReverse.push(text[i]) // add each element (char) of the string to new array

  return arrReverse.join('') // join the array and return it
}
