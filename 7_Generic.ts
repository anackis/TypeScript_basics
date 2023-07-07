const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]  // Inside "<>" we write what is inside object 
const arrayOfStrings: Array<string> = ["Hello", "World"]  

function reverse<T>(array :T[]): T[] {
  return array.reverse()
}