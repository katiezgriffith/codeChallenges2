// Write a function that returns an object which includes the count of food options selected by the developers from the meetup sign-up form array.



var meetupArray = [
    { firstName: 'Noah', lastName: 'M.', foodOptions: 'Tacos' },
    { firstName: 'Anna', lastName: 'R.', foodOptions: 'Tacos, Hamburgers' },
    { firstName: 'Ramon', lastName: 'R.', foodOptions: 'Tacos' },
    { firstName: 'George', lastName: 'B.', foodOptions: 'Hotdog' },
  ];

  
  function countFood(list) {
  
    let count = {};
    list.forEach(i => count[i.foodOptions] = (count[i.foodOptions] || 0) + 1);
    return count;
  
  }

console.log(countfood("tacos"))
