

let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};

const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.recycling++;
  }
  if (trash === "waste") {
    bins.waste++;
  } if (trash === "compost") {
    bins.compost++;
  }
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
