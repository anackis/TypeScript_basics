enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
console.log(membership)   // Will show "1"
const membershipReverse = Membership[2]
console.log(membershipReverse)  // Will show "Premium"

enum SocialMedia {
  Facebook = "Facebook",
  Instagram = "Instagram",
  Ebay = "Ebay"
}

const social = SocialMedia.Instagram
console.log(social)  // Will show "Instagram"
