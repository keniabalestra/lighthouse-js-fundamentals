
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let firstElement = vegetables[0]
  let max = firstElement[metric];
  let person = firstElement['submitter'];
  vegetables.forEach(element => {
    if (element[metric] > max) {
      max = element[metric];
      person = element['submitter'];
    }
  });
  return person;
};

console.log(judgeVegetable(vegetables, metric));
