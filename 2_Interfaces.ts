interface Rect {
  readonly id: string // readonly if we want read only :D
  color?: string  // ? -> mean that this field not necessary
  size: {
    width: number 
    height: number
  }
}

const rect1: Rect = { // Simple way of creating object 
  id: '1234',
  size: {
    width: 50, 
    height: 70
  },
  color: '#fff'
}

const rect2: Rect = { // Because color have "?" we can not assign at all or can do it later 
  id: '12345',
  size: {
    width: 80,
    height: 5
  }
}
rect2.color = "black"  // We can assign some properties after as well
// rect2.id = '123' // Error because id is readonly property

const rect3 = {} as Rect // Way to create with interface
const rect4 = <Rect>{} // Old way to create 

//----//

interface ReactWithArea extends Rect {
  getArea: () => number
}

const rect5: ReactWithArea = {
  id: '222',
  size: {
    width: 33, 
    height: 444
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}

//----//

interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

//----//

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: "1px solid black",
  margin: '2px',
  borderRadius: '5px'
}
