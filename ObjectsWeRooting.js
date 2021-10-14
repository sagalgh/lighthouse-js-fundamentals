function judgeVegetable (vegetables, metric) {
let highestMetric = 0 
let highestPerson = ''
for (let i=0; i < vegetables.length; i++){
  if (vegetables[i][metric] > highestMetric){
    highestMetric = vegetables[i][metric]
    highestPerson= vegetables[i].submitter
  }
}
return highestPerson
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 2000
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 100
  }
]

const metric = 'plumpness'
console.log(judgeVegetable(vegetables, metric))