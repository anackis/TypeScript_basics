function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

//----//

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
  default: string
}


function position(): MyPosition 
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition
function position(a?: number, b?: number) : any {
  if (!a && !b) {
    return {x: undefined, y:undefined}
  }
  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }
  return {x: a, Y: b}
}

console.log('Empty:', position());  // Empty: { x: undefined, y: undefined }
console.log('One param:', position(42));   // Two params: { x: 10, Y: 15 }
console.log('Two params:', position(10, 15));   // Two params: { x: 10, Y: 15 }


