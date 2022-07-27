let loopyLighthouse = function (range, multiple, words) {
  for (let r = range[0]; r <= range[1]; r++) {
    if (r % multiple[0] === 0 && r % multiple[1] === 0) {
      console.log(words[0] + words[1]);
    }
    else if (r % multiple[0] === 0) {
      console.log(words[0]);
    }
    else if (r % multiple[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(r);
    }


  }

}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
