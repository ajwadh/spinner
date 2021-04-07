let characters = ['|', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const spinner = function (spinArray) {
  let rounds = 0
  let animation = spinArray.length

  for (let animations of spinArray) {
    setTimeout(() => {
      process.stdout.write('\r' + animations + ' ');
    }, rounds * 200)
    rounds++
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, animation * 200)
}

spinner(characters)

