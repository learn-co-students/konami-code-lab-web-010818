const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  let index = 0;

  document.body.addEventListener('keydown', (e) => {
    let key = parseInt(e.which || e.detail);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("K O N A M I");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
