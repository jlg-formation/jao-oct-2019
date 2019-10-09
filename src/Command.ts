import { FunnyCircle } from "./FunnyCircle";

export class Command {

  target: FunnyCircle;

  constructor(target: FunnyCircle) {
    this.target = target;
  }

  add(param: string) {
    const range = document.querySelector('.command input.' + param);
    const div = document.querySelector('div.' + param);

    range.addEventListener('input', (event) => {
      const value = event.target['valueAsNumber'] as number;
      console.log('value', value);
      div.innerHTML = value + '';
      const options = {

      };
      options[param] = value;
      this.target.configure(options);
      this.target.draw();
    });
  }
}

