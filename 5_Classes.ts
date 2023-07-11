// Classes are BluePrints for objects and we can add Interfaces to them.
class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`
  }

}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4 

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

// This 2 classes are the same but more short way below.

class Car {
  readonly numberOfWheels: number = 4 
  constructor(readonly model: string) {}
}

//----//

class Animal {
  protected voice: string = ''  /// !!! Protected can be used inside the class and in classes that extends from this class.
  public color: string = "black"    /// !!!  Public is setted by default 

  constructor() {
    this.go
  }

  private go() {             /// !!! Privat we can use only inside this class and cant in other classes even if they are extended from this one. 
    console.log("Going")
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice 
  }
}

const cat = new Cat() 
// cat.voice /// !!! But we can't use cat.voice in cat because it is protected and can be used in class or class extended from main class. 
cat.setVoice('test')
console.log(cat.color)


//----// 

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render():void {
    console.log('Compiling')
  }
  info(): string {
    return 'This is info'
  }
}