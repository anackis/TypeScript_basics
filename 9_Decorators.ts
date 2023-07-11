

// Decorators are functions for extending business logic or adding metadata.

// function MneuItem(value, context) {
function MenuItem(itemID: string) {
  return function (value) {
    return class extends value {
      id = itemID;
    }
  }
}

@MenuItem("abc")
class Pizza {
  id: string;
}

@MenuItem("xyz")
class Hamburger {
  id: string;
}