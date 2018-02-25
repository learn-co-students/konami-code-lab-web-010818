
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    // e is the full event
    // parseInt takes the event and outputs the key number into an integer
    if (code[index] === key) { // if the key and the index match add +1
      index++;

      if (index === code.length) { //if the key matched (previously)
        alert('Hurray!');       //and the index was completed, hurray!
        index = 0; //restart the index
      }
    } else {
      index = 0; //if any number is wrong, start back at the beginging
    }
  });
}
