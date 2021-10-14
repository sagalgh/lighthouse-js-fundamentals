const instructorWithLongestName = function(instructors) {
const instructor = instructors[i];
  return Object.values(instructors[i]).forEach(value => console.log(value))
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));



//Object.values(instructors).forEach(value => console.log(value))