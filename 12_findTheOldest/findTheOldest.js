const findTheOldest = function(obj) {
  let sorted = obj.sort((a, b) => {
    let date = new Date().getFullYear()
    if (a.yearOfDeath == undefined) {
      a.yearOfDeath = date
    } else if (b.yearOfDeath == undefined) {
      b.yearOfDeath = date
    }
    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth) 
  })

  return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
