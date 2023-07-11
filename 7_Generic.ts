const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]  // Inside "<>" we write what is inside object 
const arrayOfStrings: Array<string> = ["Hello", "World"]  

function reverse<T>(array :T[]): T[] {
  return array.reverse()
}



// <T> -> "T" is type 
class Queue<T> {      // We use "T" to have ability decide in future what type will be placed. We use that to have 1 class and change it's type not to create new class.
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();      // We use "T" to have ability decide in future what type will be placed. We use that to have 1 class and change it's type not to create new class.
nameQueue.add('Alex');
nameQueue.add('5');

const numberQueue = new Queue<number>();      // We use "T" to have ability decide in future what type will be placed. We use that to have 1 class and change it's type not to create new class.
numberQueue.add(10);




//----//
// Where else we can use Generics 

// Functions 
function someFunction<T>(paramOne: T) : T {
  return paramOne
}

// Class Methods 
class SomeClass {
  someMethod<T>(items: T[]) : T[] {
    return items
  }
}