class Command {

  constructor(target) {
    this.target = target;
  }

  add(param) {
    const range = document.querySelector('.command input.' + param);
    const div = document.querySelector('div.' + param);
    range.addEventListener('input', (event) => {
      console.log('input %O', event.target.valueAsNumber);
      div.innerHTML = event.target.valueAsNumber;
      const options = {

      };
      options[param] = event.target.valueAsNumber;
      this.target.configure(options);
      this.target.draw();
    });
  }
}

